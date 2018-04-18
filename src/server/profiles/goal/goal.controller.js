const Goal = require('../../standards/stu3/uscore/resources/Goal');
const errors = require('../../utils/error.utils');

module.exports.getGoal = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };

		/**
		* return service.getGoal(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getGoal(req, logger, context)
			.then((goals) => {
				const searchResults = {
					'total': 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (goals) {
					for (let resource of goals) {
						if (!req.goal || req.goal === resource.goalId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							const entry = {
								'search': {
									'mode': 'match'
								},
								'resource': new Goal(resource),
								'fullUrl': `${config.auth.resourceServer}/${version}/Goal/${resource.id}`
							};
							searchResults.entry.push(entry);
						}
						searchResults.total = searchResults.entry.length;
					}
				}

				res.status(200).json(searchResults);
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};


};


module.exports.getGoalById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {

		// Create a context I can pass some data through
		let context = {
			version: req.params.version
		};

		// If we have req.goal, then we need to validate that this goal
		// is only accessing resources with his id, he is not allowed to access others
		if (
			req.goal
			&& req.body
			&& req.body.id
			&& req.goal !== req.body.id
		) {
			return next(errors.unauthorized(`You are not allowed to access goal ${req.body.id}.`));
		}

		return service.getGoalById(req, logger, context)
			.then((goal) => {
				if (goal) {
					res.status(200).json(new Goal(goal));
				} else {
					next(errors.notFound('Goal not found'));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message));
			});
	};
};


// module.exports.getGoalByFriend = ({ profile, logger }) => {
// 	let { serviceModule: service } = profile;
//
// 	return (req, res, next) => {
//
// 		// Create a context I can pass some data through
// 		let context = {
// 			version: req.params.version
// 		};
//
//
// 		return service.getGoalByFriend(req,  logger,  context)
// 			.then()
// 			.catch(err => next(errors.internal(err.message)))
//
// 	};
//
// };
