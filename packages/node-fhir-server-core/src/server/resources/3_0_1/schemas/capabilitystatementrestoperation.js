/**
 * @name exports
 * @summary CapabilityStatementRestOperation Class
 */
module.exports = class CapabilityStatementRestOperation {
  constructor(opts) {
    // Create an object to store all props
    Object.defineProperty(this, '__data', { value: {} });

    // Define getters and setters as enumerable

    Object.defineProperty(this, '_id', {
      enumerable: true,
      get: () => this.__data._id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._id = new Element(value);
      },
    });

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this.__data.id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'modifierExtension', {
      enumerable: true,
      get: () => this.__data.modifierExtension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.modifierExtension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, '_name', {
      enumerable: true,
      get: () => this.__data._name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._name = new Element(value);
      },
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get: () => this.__data.name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.name = value;
      },
    });

    Object.defineProperty(this, 'definition', {
      enumerable: true,
      get: () => this.__data.definition,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.definition = new Reference(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'CapabilityStatementRestOperation',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'CapabilityStatementRestOperation';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _name: this._name && this._name.toJSON(),
      name: this.name,
      definition: this.definition && this.definition.toJSON(),
    };
  }
};
