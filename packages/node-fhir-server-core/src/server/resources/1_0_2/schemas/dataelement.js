/**
 * @name exports
 * @summary DataElement Class
 */
module.exports = class DataElement {
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

    Object.defineProperty(this, 'meta', {
      enumerable: true,
      get: () => this.__data.meta,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Meta = require('./meta.js');
        this.__data.meta = new Meta(value);
      },
    });

    Object.defineProperty(this, '_implicitRules', {
      enumerable: true,
      get: () => this.__data._implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._implicitRules = new Element(value);
      },
    });

    Object.defineProperty(this, 'implicitRules', {
      enumerable: true,
      get: () => this.__data.implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.implicitRules = value;
      },
    });

    Object.defineProperty(this, '_language', {
      enumerable: true,
      get: () => this.__data._language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._language = new Element(value);
      },
    });

    Object.defineProperty(this, 'language', {
      enumerable: true,
      get: () => this.__data.language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.language = value;
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Narrative = require('./narrative.js');
        this.__data.text = new Narrative(value);
      },
    });

    Object.defineProperty(this, 'contained', {
      enumerable: true,
      get: () => this.__data.contained,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contained = Array.isArray(value) ? value.map((v) => v) : [value];
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

    Object.defineProperty(this, '_url', {
      enumerable: true,
      get: () => this.__data._url,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._url = new Element(value);
      },
    });

    Object.defineProperty(this, 'url', {
      enumerable: true,
      get: () => this.__data.url,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.url = value;
      },
    });

    Object.defineProperty(this, 'identifier', {
      enumerable: true,
      get: () => this.__data.identifier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Identifier = require('./identifier.js');
        this.__data.identifier = Array.isArray(value)
          ? value.map((v) => new Identifier(v))
          : [new Identifier(value)];
      },
    });

    Object.defineProperty(this, '_version', {
      enumerable: true,
      get: () => this.__data._version,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._version = new Element(value);
      },
    });

    Object.defineProperty(this, 'version', {
      enumerable: true,
      get: () => this.__data.version,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.version = value;
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

    Object.defineProperty(this, '_status', {
      enumerable: true,
      get: () => this.__data._status,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._status = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
    Object.defineProperty(this, 'status', {
      enumerable: true,
      get: () => this.__data.status,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.status = value;
      },
    });

    Object.defineProperty(this, '_experimental', {
      enumerable: true,
      get: () => this.__data._experimental,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._experimental = new Element(value);
      },
    });

    Object.defineProperty(this, 'experimental', {
      enumerable: true,
      get: () => this.__data.experimental,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.experimental = value;
      },
    });

    Object.defineProperty(this, '_publisher', {
      enumerable: true,
      get: () => this.__data._publisher,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._publisher = new Element(value);
      },
    });

    Object.defineProperty(this, 'publisher', {
      enumerable: true,
      get: () => this.__data.publisher,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.publisher = value;
      },
    });

    Object.defineProperty(this, 'contact', {
      enumerable: true,
      get: () => this.__data.contact,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let DataElementContact = require('./dataelementcontact.js');
        this.__data.contact = Array.isArray(value)
          ? value.map((v) => new DataElementContact(v))
          : [new DataElementContact(value)];
      },
    });

    Object.defineProperty(this, '_date', {
      enumerable: true,
      get: () => this.__data._date,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._date = new Element(value);
      },
    });

    Object.defineProperty(this, 'date', {
      enumerable: true,
      get: () => this.__data.date,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.date = value;
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/use-context
    Object.defineProperty(this, 'useContext', {
      enumerable: true,
      get: () => this.__data.useContext,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.useContext = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, '_copyright', {
      enumerable: true,
      get: () => this.__data._copyright,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._copyright = new Element(value);
      },
    });

    Object.defineProperty(this, 'copyright', {
      enumerable: true,
      get: () => this.__data.copyright,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.copyright = value;
      },
    });

    Object.defineProperty(this, '_stringency', {
      enumerable: true,
      get: () => this.__data._stringency,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._stringency = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/dataelement-stringency
    Object.defineProperty(this, 'stringency', {
      enumerable: true,
      get: () => this.__data.stringency,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.stringency = value;
      },
    });

    Object.defineProperty(this, 'mapping', {
      enumerable: true,
      get: () => this.__data.mapping,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let DataElementMapping = require('./dataelementmapping.js');
        this.__data.mapping = Array.isArray(value)
          ? value.map((v) => new DataElementMapping(v))
          : [new DataElementMapping(value)];
      },
    });

    Object.defineProperty(this, 'element', {
      enumerable: true,
      get: () => this.__data.element,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ElementDefinition = require('./elementdefinition.js');
        this.__data.element = Array.isArray(value)
          ? value.map((v) => new ElementDefinition(v))
          : [new ElementDefinition(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'DataElement',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'DataElement';
  }

  toJSON() {
    return {
      resourceType: this.resourceType,
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      _implicitRules: this._implicitRules && this._implicitRules.toJSON(),
      implicitRules: this.implicitRules,
      _language: this._language && this._language.toJSON(),
      language: this.language,
      text: this.text && this.text.toJSON(),
      contained: this.contained,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _url: this._url && this._url.toJSON(),
      url: this.url,
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      _version: this._version && this._version.toJSON(),
      version: this.version,
      _name: this._name && this._name.toJSON(),
      name: this.name,
      _status: this._status && this._status.toJSON(),
      status: this.status,
      _experimental: this._experimental && this._experimental.toJSON(),
      experimental: this.experimental,
      _publisher: this._publisher && this._publisher.toJSON(),
      publisher: this.publisher,
      contact: this.contact && this.contact.map((v) => v.toJSON()),
      _date: this._date && this._date.toJSON(),
      date: this.date,
      useContext: this.useContext && this.useContext.map((v) => v.toJSON()),
      _copyright: this._copyright && this._copyright.toJSON(),
      copyright: this.copyright,
      _stringency: this._stringency && this._stringency.toJSON(),
      stringency: this.stringency,
      mapping: this.mapping && this.mapping.map((v) => v.toJSON()),
      element: this.element && this.element.map((v) => v.toJSON()),
    };
  }
};
