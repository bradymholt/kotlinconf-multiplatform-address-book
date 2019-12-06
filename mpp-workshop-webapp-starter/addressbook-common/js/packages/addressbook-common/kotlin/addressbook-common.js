(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-runtime', 'kotlinx-coroutines-core', 'ktor-ktor-http', 'ktor-ktor-client-core', 'ktor-ktor-client-json', 'ktor-ktor-client-serialization'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('kotlinx-coroutines-core'), require('ktor-ktor-http'), require('ktor-ktor-client-core'), require('ktor-ktor-client-json'), require('ktor-ktor-client-serialization'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'addressbook-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'addressbook-common'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'addressbook-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'addressbook-common'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'addressbook-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'addressbook-common'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'addressbook-common'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'addressbook-common'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'addressbook-common'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'addressbook-common'.");
    }
    if (typeof this['ktor-ktor-client-json'] === 'undefined') {
      throw new Error("Error loading module 'addressbook-common'. Its dependency 'ktor-ktor-client-json' was not found. Please, check whether 'ktor-ktor-client-json' is loaded prior to 'addressbook-common'.");
    }
    if (typeof this['ktor-ktor-client-serialization'] === 'undefined') {
      throw new Error("Error loading module 'addressbook-common'. Its dependency 'ktor-ktor-client-serialization' was not found. Please, check whether 'ktor-ktor-client-serialization' is loaded prior to 'addressbook-common'.");
    }
    root['addressbook-common'] = factory(typeof this['addressbook-common'] === 'undefined' ? {} : this['addressbook-common'], kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime'], this['kotlinx-coroutines-core'], this['ktor-ktor-http'], this['ktor-ktor-client-core'], this['ktor-ktor-client-json'], this['ktor-ktor-client-serialization']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$kotlinx_coroutines_core, $module$ktor_ktor_http, $module$ktor_ktor_client_core, $module$ktor_ktor_client_json, $module$ktor_ktor_client_serialization) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var equals = Kotlin.equals;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var getKClass = Kotlin.getKClass;
  var EnumSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.EnumSerializer;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var Exception = Kotlin.kotlin.Exception;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var throwUPAE = Kotlin.throwUPAE;
  var URLProtocol = $module$ktor_ktor_http.io.ktor.http.URLProtocol;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var get_list = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.get_list_gekvwj$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var get_map = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.get_map_kgqhr1$;
  var HttpMethod = $module$ktor_ktor_http.io.ktor.http.HttpMethod;
  var ContentType = $module$ktor_ktor_http.io.ktor.http.ContentType;
  var TextContent = $module$ktor_ktor_http.io.ktor.http.content.TextContent;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var call = $module$ktor_ktor_client_core.io.ktor.client.call.call_htnejk$;
  var HttpStatusCode = $module$ktor_ktor_http.io.ktor.http.HttpStatusCode;
  var JsonFeature = $module$ktor_ktor_client_json.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var HttpClient = $module$ktor_ktor_client_core.io.ktor.client.HttpClient_f0veat$;
  var utils = $module$ktor_ktor_client_core.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod_0 = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call_0 = $module$ktor_ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var throwCCE = Kotlin.throwCCE;
  var call_0_0 = $module$ktor_ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core.io.ktor.client.call.TypeInfo;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  Address$Type.prototype = Object.create(Enum.prototype);
  Address$Type.prototype.constructor = Address$Type;
  Phone$Type.prototype = Object.create(Enum.prototype);
  Phone$Type.prototype.constructor = Phone$Type;
  ContactCreationUpdatePresenter.prototype = Object.create(BasePresenter.prototype);
  ContactCreationUpdatePresenter.prototype.constructor = ContactCreationUpdatePresenter;
  ContactDetailPresenter.prototype = Object.create(BasePresenter.prototype);
  ContactDetailPresenter.prototype.constructor = ContactDetailPresenter;
  ContactListPresenter.prototype = Object.create(BasePresenter.prototype);
  ContactListPresenter.prototype.constructor = ContactListPresenter;
  function CommonInjector() {
    CommonInjector_instance = this;
    this.api_jlzwkx$_0 = lazy(CommonInjector$api$lambda);
  }
  Object.defineProperty(CommonInjector.prototype, 'api_0', {
    get: function () {
      return this.api_jlzwkx$_0.value;
    }
  });
  CommonInjector.prototype.contactListPresenter = function () {
    return new ContactListPresenter(this.api_0);
  };
  CommonInjector.prototype.contactDetailPresenter = function () {
    return new ContactDetailPresenter(this.api_0);
  };
  CommonInjector.prototype.contactCreationUpdatePresenter = function () {
    return new ContactCreationUpdatePresenter(this.api_0);
  };
  function CommonInjector$api$lambda() {
    return new ContactApi();
  }
  CommonInjector.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CommonInjector',
    interfaces: []
  };
  var CommonInjector_instance = null;
  function CommonInjector_getInstance() {
    if (CommonInjector_instance === null) {
      new CommonInjector();
    }
    return CommonInjector_instance;
  }
  function Contact(id, name, addresses, phones) {
    Contact$Companion_getInstance();
    if (addresses === void 0) {
      addresses = ArrayList_init();
    }
    if (phones === void 0) {
      phones = ArrayList_init();
    }
    this.id = id;
    this.name = name;
    this.addresses = addresses;
    this.phones = phones;
  }
  Object.defineProperty(Contact.prototype, 'fullName', {
    get: function () {
      return this.name.lastName + ' ' + this.name.firstName;
    }
  });
  function Contact$Companion() {
    Contact$Companion_instance = this;
  }
  Contact$Companion.prototype.serializer = function () {
    return Contact$$serializer_getInstance();
  };
  Contact$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Contact$Companion_instance = null;
  function Contact$Companion_getInstance() {
    if (Contact$Companion_instance === null) {
      new Contact$Companion();
    }
    return Contact$Companion_instance;
  }
  function Contact$$serializer() {
    this.descriptor_i71ksb$_0 = new SerialClassDescImpl('Contact', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('addresses', true);
    this.descriptor.addElement_ivxn3r$('phones', true);
    Contact$$serializer_instance = this;
  }
  Object.defineProperty(Contact$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_i71ksb$_0;
    }
  });
  Contact$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Name$$serializer_getInstance(), obj.name);
    if (!equals(obj.addresses, ArrayList_init()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, new ArrayListSerializer(Address$$serializer_getInstance()), obj.addresses);
    if (!equals(obj.phones, ArrayList_init()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, new ArrayListSerializer(Phone$$serializer_getInstance()), obj.phones);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Contact$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, Name$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, Name$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ArrayListSerializer(Address$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ArrayListSerializer(Address$$serializer_getInstance()), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ArrayListSerializer(Phone$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ArrayListSerializer(Phone$$serializer_getInstance()), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Contact_init(bitMask0, local0, local1, local2, local3, null);
  };
  Contact$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, Name$$serializer_getInstance(), new ArrayListSerializer(Address$$serializer_getInstance()), new ArrayListSerializer(Phone$$serializer_getInstance())];
  };
  Contact$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Contact$$serializer_instance = null;
  function Contact$$serializer_getInstance() {
    if (Contact$$serializer_instance === null) {
      new Contact$$serializer();
    }
    return Contact$$serializer_instance;
  }
  function Contact_init(seen1, id, name, addresses, phones, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Contact.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 4) === 0) {
      $this.addresses = ArrayList_init();
    }
     else
      $this.addresses = addresses;
    if ((seen1 & 8) === 0) {
      $this.phones = ArrayList_init();
    }
     else
      $this.phones = phones;
    return $this;
  }
  Contact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contact',
    interfaces: []
  };
  Contact.prototype.component1 = function () {
    return this.id;
  };
  Contact.prototype.component2 = function () {
    return this.name;
  };
  Contact.prototype.component3 = function () {
    return this.addresses;
  };
  Contact.prototype.component4 = function () {
    return this.phones;
  };
  Contact.prototype.copy_n4lm9r$ = function (id, name, addresses, phones) {
    return new Contact(id === void 0 ? this.id : id, name === void 0 ? this.name : name, addresses === void 0 ? this.addresses : addresses, phones === void 0 ? this.phones : phones);
  };
  Contact.prototype.toString = function () {
    return 'Contact(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', addresses=' + Kotlin.toString(this.addresses)) + (', phones=' + Kotlin.toString(this.phones)) + ')';
  };
  Contact.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.addresses) | 0;
    result = result * 31 + Kotlin.hashCode(this.phones) | 0;
    return result;
  };
  Contact.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.addresses, other.addresses) && Kotlin.equals(this.phones, other.phones)))));
  };
  function Name(firstName, lastName) {
    Name$Companion_getInstance();
    this.firstName = firstName;
    this.lastName = lastName;
  }
  function Name$Companion() {
    Name$Companion_instance = this;
  }
  Name$Companion.prototype.serializer = function () {
    return Name$$serializer_getInstance();
  };
  Name$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Name$Companion_instance = null;
  function Name$Companion_getInstance() {
    if (Name$Companion_instance === null) {
      new Name$Companion();
    }
    return Name$Companion_instance;
  }
  function Name$$serializer() {
    this.descriptor_dm4kwg$_0 = new SerialClassDescImpl('Name', this);
    this.descriptor.addElement_ivxn3r$('firstName', false);
    this.descriptor.addElement_ivxn3r$('lastName', false);
    Name$$serializer_instance = this;
  }
  Object.defineProperty(Name$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_dm4kwg$_0;
    }
  });
  Name$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.firstName);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.lastName);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Name$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Name_init(bitMask0, local0, local1, null);
  };
  Name$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  Name$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Name$$serializer_instance = null;
  function Name$$serializer_getInstance() {
    if (Name$$serializer_instance === null) {
      new Name$$serializer();
    }
    return Name$$serializer_instance;
  }
  function Name_init(seen1, firstName, lastName, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Name.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('firstName');
    else
      $this.firstName = firstName;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('lastName');
    else
      $this.lastName = lastName;
    return $this;
  }
  Name.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Name',
    interfaces: []
  };
  Name.prototype.component1 = function () {
    return this.firstName;
  };
  Name.prototype.component2 = function () {
    return this.lastName;
  };
  Name.prototype.copy_puj7f4$ = function (firstName, lastName) {
    return new Name(firstName === void 0 ? this.firstName : firstName, lastName === void 0 ? this.lastName : lastName);
  };
  Name.prototype.toString = function () {
    return 'Name(firstName=' + Kotlin.toString(this.firstName) + (', lastName=' + Kotlin.toString(this.lastName)) + ')';
  };
  Name.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.firstName) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastName) | 0;
    return result;
  };
  Name.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.firstName, other.firstName) && Kotlin.equals(this.lastName, other.lastName)))));
  };
  function Address(type, street, postalCode, city, country) {
    Address$Companion_getInstance();
    this.type = type;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
  }
  function Address$Type(name, ordinal, displayedName) {
    Enum.call(this);
    this.displayedName = displayedName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Address$Type_initFields() {
    Address$Type_initFields = function () {
    };
    Address$Type$HOME_instance = new Address$Type('HOME', 0, 'HOME');
    Address$Type$WORK_instance = new Address$Type('WORK', 1, 'WORK');
    Address$Type$OTHER_instance = new Address$Type('OTHER', 2, 'OTHER');
  }
  var Address$Type$HOME_instance;
  function Address$Type$HOME_getInstance() {
    Address$Type_initFields();
    return Address$Type$HOME_instance;
  }
  var Address$Type$WORK_instance;
  function Address$Type$WORK_getInstance() {
    Address$Type_initFields();
    return Address$Type$WORK_instance;
  }
  var Address$Type$OTHER_instance;
  function Address$Type$OTHER_getInstance() {
    Address$Type_initFields();
    return Address$Type$OTHER_instance;
  }
  Address$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Address$Type$values() {
    return [Address$Type$HOME_getInstance(), Address$Type$WORK_getInstance(), Address$Type$OTHER_getInstance()];
  }
  Address$Type.values = Address$Type$values;
  function Address$Type$valueOf(name) {
    switch (name) {
      case 'HOME':
        return Address$Type$HOME_getInstance();
      case 'WORK':
        return Address$Type$WORK_getInstance();
      case 'OTHER':
        return Address$Type$OTHER_getInstance();
      default:throwISE('No enum constant Address.Type.' + name);
    }
  }
  Address$Type.valueOf_61zpoe$ = Address$Type$valueOf;
  function Address$Companion() {
    Address$Companion_instance = this;
  }
  Address$Companion.prototype.serializer = function () {
    return Address$$serializer_getInstance();
  };
  Address$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Address$Companion_instance = null;
  function Address$Companion_getInstance() {
    if (Address$Companion_instance === null) {
      new Address$Companion();
    }
    return Address$Companion_instance;
  }
  function Address$$serializer() {
    this.descriptor_vvsqzr$_0 = new SerialClassDescImpl('Address', this);
    this.descriptor.addElement_ivxn3r$('type', false);
    this.descriptor.addElement_ivxn3r$('street', false);
    this.descriptor.addElement_ivxn3r$('postalCode', false);
    this.descriptor.addElement_ivxn3r$('city', false);
    this.descriptor.addElement_ivxn3r$('country', false);
    Address$$serializer_instance = this;
  }
  Object.defineProperty(Address$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_vvsqzr$_0;
    }
  });
  Address$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new EnumSerializer(getKClass(Address$Type), 'Address.Type'), obj.type);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.street);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.postalCode);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.city);
    output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.country);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Address$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new EnumSerializer(getKClass(Address$Type), 'Address.Type')) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new EnumSerializer(getKClass(Address$Type), 'Address.Type'), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Address_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  Address$$serializer.prototype.childSerializers = function () {
    return [new EnumSerializer(getKClass(Address$Type), 'Address.Type'), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Address$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Address$$serializer_instance = null;
  function Address$$serializer_getInstance() {
    if (Address$$serializer_instance === null) {
      new Address$$serializer();
    }
    return Address$$serializer_instance;
  }
  function Address_init(seen1, type, street, postalCode, city, country, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Address.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('street');
    else
      $this.street = street;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('postalCode');
    else
      $this.postalCode = postalCode;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('city');
    else
      $this.city = city;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('country');
    else
      $this.country = country;
    return $this;
  }
  Address.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Address',
    interfaces: []
  };
  Address.prototype.component1 = function () {
    return this.type;
  };
  Address.prototype.component2 = function () {
    return this.street;
  };
  Address.prototype.component3 = function () {
    return this.postalCode;
  };
  Address.prototype.component4 = function () {
    return this.city;
  };
  Address.prototype.component5 = function () {
    return this.country;
  };
  Address.prototype.copy_9y8fwc$ = function (type, street, postalCode, city, country) {
    return new Address(type === void 0 ? this.type : type, street === void 0 ? this.street : street, postalCode === void 0 ? this.postalCode : postalCode, city === void 0 ? this.city : city, country === void 0 ? this.country : country);
  };
  Address.prototype.toString = function () {
    return 'Address(type=' + Kotlin.toString(this.type) + (', street=' + Kotlin.toString(this.street)) + (', postalCode=' + Kotlin.toString(this.postalCode)) + (', city=' + Kotlin.toString(this.city)) + (', country=' + Kotlin.toString(this.country)) + ')';
  };
  Address.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.street) | 0;
    result = result * 31 + Kotlin.hashCode(this.postalCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    return result;
  };
  Address.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.street, other.street) && Kotlin.equals(this.postalCode, other.postalCode) && Kotlin.equals(this.city, other.city) && Kotlin.equals(this.country, other.country)))));
  };
  function Phone(type, number) {
    Phone$Companion_getInstance();
    this.type = type;
    this.number = number;
  }
  function Phone$Type(name, ordinal, displayedName) {
    Enum.call(this);
    this.displayedName = displayedName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Phone$Type_initFields() {
    Phone$Type_initFields = function () {
    };
    Phone$Type$HOME_instance = new Phone$Type('HOME', 0, 'HOME');
    Phone$Type$WORK_instance = new Phone$Type('WORK', 1, 'WORK');
    Phone$Type$MOBILE_instance = new Phone$Type('MOBILE', 2, 'MOBILE');
    Phone$Type$OTHER_instance = new Phone$Type('OTHER', 3, 'OTHER');
  }
  var Phone$Type$HOME_instance;
  function Phone$Type$HOME_getInstance() {
    Phone$Type_initFields();
    return Phone$Type$HOME_instance;
  }
  var Phone$Type$WORK_instance;
  function Phone$Type$WORK_getInstance() {
    Phone$Type_initFields();
    return Phone$Type$WORK_instance;
  }
  var Phone$Type$MOBILE_instance;
  function Phone$Type$MOBILE_getInstance() {
    Phone$Type_initFields();
    return Phone$Type$MOBILE_instance;
  }
  var Phone$Type$OTHER_instance;
  function Phone$Type$OTHER_getInstance() {
    Phone$Type_initFields();
    return Phone$Type$OTHER_instance;
  }
  Phone$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Phone$Type$values() {
    return [Phone$Type$HOME_getInstance(), Phone$Type$WORK_getInstance(), Phone$Type$MOBILE_getInstance(), Phone$Type$OTHER_getInstance()];
  }
  Phone$Type.values = Phone$Type$values;
  function Phone$Type$valueOf(name) {
    switch (name) {
      case 'HOME':
        return Phone$Type$HOME_getInstance();
      case 'WORK':
        return Phone$Type$WORK_getInstance();
      case 'MOBILE':
        return Phone$Type$MOBILE_getInstance();
      case 'OTHER':
        return Phone$Type$OTHER_getInstance();
      default:throwISE('No enum constant Phone.Type.' + name);
    }
  }
  Phone$Type.valueOf_61zpoe$ = Phone$Type$valueOf;
  function Phone$Companion() {
    Phone$Companion_instance = this;
  }
  Phone$Companion.prototype.serializer = function () {
    return Phone$$serializer_getInstance();
  };
  Phone$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Phone$Companion_instance = null;
  function Phone$Companion_getInstance() {
    if (Phone$Companion_instance === null) {
      new Phone$Companion();
    }
    return Phone$Companion_instance;
  }
  function Phone$$serializer() {
    this.descriptor_ml6k7n$_0 = new SerialClassDescImpl('Phone', this);
    this.descriptor.addElement_ivxn3r$('type', false);
    this.descriptor.addElement_ivxn3r$('number', false);
    Phone$$serializer_instance = this;
  }
  Object.defineProperty(Phone$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ml6k7n$_0;
    }
  });
  Phone$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new EnumSerializer(getKClass(Phone$Type), 'Phone.Type'), obj.type);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.number);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Phone$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new EnumSerializer(getKClass(Phone$Type), 'Phone.Type')) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new EnumSerializer(getKClass(Phone$Type), 'Phone.Type'), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Phone_init(bitMask0, local0, local1, null);
  };
  Phone$$serializer.prototype.childSerializers = function () {
    return [new EnumSerializer(getKClass(Phone$Type), 'Phone.Type'), internal.StringSerializer];
  };
  Phone$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Phone$$serializer_instance = null;
  function Phone$$serializer_getInstance() {
    if (Phone$$serializer_instance === null) {
      new Phone$$serializer();
    }
    return Phone$$serializer_instance;
  }
  function Phone_init(seen1, type, number, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Phone.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('number');
    else
      $this.number = number;
    return $this;
  }
  Phone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Phone',
    interfaces: []
  };
  Phone.prototype.component1 = function () {
    return this.type;
  };
  Phone.prototype.component2 = function () {
    return this.number;
  };
  Phone.prototype.copy_p61j04$ = function (type, number) {
    return new Phone(type === void 0 ? this.type : type, number === void 0 ? this.number : number);
  };
  Phone.prototype.toString = function () {
    return 'Phone(type=' + Kotlin.toString(this.type) + (', number=' + Kotlin.toString(this.number)) + ')';
  };
  Phone.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    return result;
  };
  Phone.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.number, other.number)))));
  };
  function ContactCreationUpdate() {
  }
  function ContactCreationUpdate$Presenter() {
  }
  ContactCreationUpdate$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  function ContactCreationUpdate$View() {
  }
  ContactCreationUpdate$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  ContactCreationUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactCreationUpdate',
    interfaces: []
  };
  function ContactCreationUpdatePresenter(contactApi, coroutineContext) {
    if (coroutineContext === void 0)
      coroutineContext = ApplicationDispatcher;
    BasePresenter.call(this, coroutineContext);
    this.contactApi_0 = contactApi;
  }
  function Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda(this$ContactCreationUpdatePresenter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ContactCreationUpdatePresenter = this$ContactCreationUpdatePresenter_0;
  }
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda.prototype.constructor = Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda;
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ContactCreationUpdatePresenter.view) != null ? (tmp$.updateOrCreationSucceed(), Unit) : null;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda(this$ContactCreationUpdatePresenter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda(this$ContactCreationUpdatePresenter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0(this$ContactCreationUpdatePresenter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ContactCreationUpdatePresenter = this$ContactCreationUpdatePresenter_0;
  }
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0.prototype.constructor = Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0;
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ContactCreationUpdatePresenter.view) != null ? (tmp$.updateOrCreationFails(), Unit) : null;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0(this$ContactCreationUpdatePresenter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0(this$ContactCreationUpdatePresenter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda(closure$contact_0, this$ContactCreationUpdatePresenter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 9;
    this.local$closure$contact = closure$contact_0;
    this.local$this$ContactCreationUpdatePresenter = this$ContactCreationUpdatePresenter_0;
  }
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda.prototype.constructor = Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda;
  Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 5;
            if (equals(this.local$closure$contact.id, '-1')) {
              this.state_0 = 2;
              this.result_0 = this.local$this$ContactCreationUpdatePresenter.contactApi_0.putContact_rri8sg$(this.local$closure$contact, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 1;
              this.result_0 = this.local$this$ContactCreationUpdatePresenter.contactApi_0.postContact_rri8sg$(this.local$closure$contact, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            this.state_0 = 3;
            continue;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = withContext(UIDispatcher, ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda(this.local$this$ContactCreationUpdatePresenter), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
          case 5:
            this.exceptionState_0 = 9;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              this.state_0 = 6;
              this.result_0 = withContext(UIDispatcher, ContactCreationUpdatePresenter$updateOrCreateContact$lambda$lambda_0(this.local$this$ContactCreationUpdatePresenter), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw e;
            }

          case 6:
            return this.result_0;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactCreationUpdatePresenter$updateOrCreateContact$lambda(closure$contact_0, this$ContactCreationUpdatePresenter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactCreationUpdatePresenter$updateOrCreateContact$lambda(closure$contact_0, this$ContactCreationUpdatePresenter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ContactCreationUpdatePresenter.prototype.updateOrCreateContact = function (contact) {
    launch(this.scope, void 0, void 0, ContactCreationUpdatePresenter$updateOrCreateContact$lambda(contact, this));
  };
  ContactCreationUpdatePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactCreationUpdatePresenter',
    interfaces: [BasePresenter, ContactCreationUpdate$Presenter]
  };
  function ContactDetail() {
  }
  function ContactDetail$Presenter() {
  }
  ContactDetail$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  function ContactDetail$View() {
  }
  ContactDetail$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  ContactDetail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactDetail',
    interfaces: []
  };
  function ContactDetailPresenter(contactApi, coroutineContext) {
    if (coroutineContext === void 0)
      coroutineContext = ApplicationDispatcher;
    BasePresenter.call(this, coroutineContext);
    this.contactApi_0 = contactApi;
  }
  function Coroutine$ContactDetailPresenter$getContact$lambda$lambda(this$ContactDetailPresenter_0, closure$contact_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ContactDetailPresenter = this$ContactDetailPresenter_0;
    this.local$closure$contact = closure$contact_0;
  }
  Coroutine$ContactDetailPresenter$getContact$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactDetailPresenter$getContact$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactDetailPresenter$getContact$lambda$lambda.prototype.constructor = Coroutine$ContactDetailPresenter$getContact$lambda$lambda;
  Coroutine$ContactDetailPresenter$getContact$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ContactDetailPresenter.view) != null ? (tmp$.displayContact(this.local$closure$contact), Unit) : null;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactDetailPresenter$getContact$lambda$lambda(this$ContactDetailPresenter_0, closure$contact_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactDetailPresenter$getContact$lambda$lambda(this$ContactDetailPresenter_0, closure$contact_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ContactDetailPresenter$getContact$lambda(this$ContactDetailPresenter_0, closure$contactId_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ContactDetailPresenter = this$ContactDetailPresenter_0;
    this.local$closure$contactId = closure$contactId_0;
  }
  Coroutine$ContactDetailPresenter$getContact$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactDetailPresenter$getContact$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactDetailPresenter$getContact$lambda.prototype.constructor = Coroutine$ContactDetailPresenter$getContact$lambda;
  Coroutine$ContactDetailPresenter$getContact$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ContactDetailPresenter.contactApi_0.getContactById_61zpoe$(this.local$closure$contactId, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var contact = this.result_0;
            this.state_0 = 3;
            this.result_0 = withContext(UIDispatcher, ContactDetailPresenter$getContact$lambda$lambda(this.local$this$ContactDetailPresenter, contact), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactDetailPresenter$getContact$lambda(this$ContactDetailPresenter_0, closure$contactId_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactDetailPresenter$getContact$lambda(this$ContactDetailPresenter_0, closure$contactId_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ContactDetailPresenter.prototype.getContact = function (contactId) {
    launch(this.scope, void 0, void 0, ContactDetailPresenter$getContact$lambda(this, contactId));
  };
  ContactDetailPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactDetailPresenter',
    interfaces: [BasePresenter, ContactDetail$Presenter]
  };
  function ContactList() {
  }
  function ContactList$View() {
  }
  ContactList$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  ContactList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactList',
    interfaces: []
  };
  function ContactListPresenter(contactApi, coroutineContext) {
    if (coroutineContext === void 0)
      coroutineContext = ApplicationDispatcher;
    BasePresenter.call(this, coroutineContext);
    this.contactApi_0 = contactApi;
  }
  function Coroutine$ContactListPresenter$onViewAttached$lambda$lambda(closure$view_0, closure$contactList_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$view = closure$view_0;
    this.local$closure$contactList = closure$contactList_0;
  }
  Coroutine$ContactListPresenter$onViewAttached$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactListPresenter$onViewAttached$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactListPresenter$onViewAttached$lambda$lambda.prototype.constructor = Coroutine$ContactListPresenter$onViewAttached$lambda$lambda;
  Coroutine$ContactListPresenter$onViewAttached$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$view != null ? (this.local$closure$view.displayContactList(this.local$closure$contactList), Unit) : null;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactListPresenter$onViewAttached$lambda$lambda(closure$view_0, closure$contactList_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactListPresenter$onViewAttached$lambda$lambda(closure$view_0, closure$contactList_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ContactListPresenter$onViewAttached$lambda(this$ContactListPresenter_0, closure$view_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ContactListPresenter = this$ContactListPresenter_0;
    this.local$closure$view = closure$view_0;
  }
  Coroutine$ContactListPresenter$onViewAttached$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactListPresenter$onViewAttached$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactListPresenter$onViewAttached$lambda.prototype.constructor = Coroutine$ContactListPresenter$onViewAttached$lambda;
  Coroutine$ContactListPresenter$onViewAttached$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ContactListPresenter.contactApi_0.getAllContacts(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var contactList = this.result_0;
            this.state_0 = 3;
            this.result_0 = withContext(UIDispatcher, ContactListPresenter$onViewAttached$lambda$lambda(this.local$closure$view, contactList), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactListPresenter$onViewAttached$lambda(this$ContactListPresenter_0, closure$view_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactListPresenter$onViewAttached$lambda(this$ContactListPresenter_0, closure$view_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ContactListPresenter.prototype.onViewAttached_11rb$ = function (view) {
    launch(this.scope, void 0, void 0, ContactListPresenter$onViewAttached$lambda(this, view));
  };
  ContactListPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactListPresenter',
    interfaces: [BasePresenter]
  };
  function PresenterCoroutineScope(context) {
    this.cancellableJob_0 = Job();
    this.coroutineContext_k1q52o$_0 = context.plus_1fupul$(this.cancellableJob_0);
  }
  Object.defineProperty(PresenterCoroutineScope.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_k1q52o$_0;
    }
  });
  PresenterCoroutineScope.prototype.viewDetached = function () {
    this.cancellableJob_0.cancel_m4sck1$();
  };
  PresenterCoroutineScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PresenterCoroutineScope',
    interfaces: [CoroutineScope]
  };
  function BasePresenter(coroutineContext) {
    this.coroutineContext_xxjaw3$_0 = coroutineContext;
    this.view_up8245$_0 = null;
    this.scope_qt7qw6$_0 = this.scope_qt7qw6$_0;
  }
  Object.defineProperty(BasePresenter.prototype, 'view', {
    get: function () {
      return this.view_up8245$_0;
    },
    set: function (view) {
      this.view_up8245$_0 = view;
    }
  });
  Object.defineProperty(BasePresenter.prototype, 'scope', {
    get: function () {
      if (this.scope_qt7qw6$_0 == null)
        return throwUPAE('scope');
      return this.scope_qt7qw6$_0;
    },
    set: function (scope) {
      this.scope_qt7qw6$_0 = scope;
    }
  });
  BasePresenter.prototype.attachView = function (view) {
    this.view = view;
    this.scope = new PresenterCoroutineScope(this.coroutineContext_xxjaw3$_0);
    this.onViewAttached_11rb$(view);
  };
  BasePresenter.prototype.onViewAttached_11rb$ = function (view) {
  };
  BasePresenter.prototype.detachView = function () {
    this.view = null;
    this.scope.viewDetached();
  };
  BasePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasePresenter',
    interfaces: []
  };
  function get$lambda($receiver) {
    return Unit;
  }
  function put$lambda($receiver) {
    return Unit;
  }
  var LOCALHOST;
  function ContactApi() {
    this.client_0 = HttpClient(ContactApi$client$lambda);
  }
  function ContactApi$apiUrl$lambda(closure$path) {
    return function ($receiver, it) {
      $receiver.host = apiBaseUrl();
      $receiver.port = 8042;
      $receiver.protocol = URLProtocol.Companion.HTTP;
      $receiver.encodedPath = '/api/contacts' + closure$path;
      return Unit;
    };
  }
  ContactApi.prototype.apiUrl_0 = function ($receiver, path) {
    if (path === void 0)
      path = '/';
    $receiver.url_6yzzjr$(ContactApi$apiUrl$lambda(path));
  };
  function ContactApi$getAllContacts$lambda(this$ContactApi) {
    return function ($receiver) {
      this$ContactApi.apiUrl_0($receiver);
      return Unit;
    };
  }
  function Coroutine$getAllContacts($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$getAllContacts.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getAllContacts.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getAllContacts.prototype.constructor = Coroutine$getAllContacts;
  Coroutine$getAllContacts.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_0 = Json.Companion.nonstrict;
            this.local$tmp$ = get_list(Contact$Companion_getInstance().serializer());
            var $receiver_0 = this.$this.client_0;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Get;
            $receiver_1.body = body;
            ContactApi$getAllContacts$lambda(this.$this)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call_0($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(PrimitiveClasses$stringClass, call_0_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            return this.local$tmp$_0.parse_awif5v$(this.local$tmp$, this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ContactApi.prototype.getAllContacts = function (continuation_0, suspended) {
    var instance = new Coroutine$getAllContacts(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function ContactApi$getContactById$lambda(closure$contactId, this$ContactApi) {
    return function ($receiver) {
      this$ContactApi.apiUrl_0($receiver, '/' + closure$contactId);
      return Unit;
    };
  }
  function Coroutine$getContactById_61zpoe$($this, contactId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$contactId = contactId_0;
  }
  Coroutine$getContactById_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getContactById_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getContactById_61zpoe$.prototype.constructor = Coroutine$getContactById_61zpoe$;
  Coroutine$getContactById_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_0 = Json.Companion.nonstrict;
            this.local$tmp$ = Contact$Companion_getInstance().serializer();
            var $receiver_0 = this.$this.client_0;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Get;
            $receiver_1.body = body;
            ContactApi$getContactById$lambda(this.local$contactId, this.$this)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call_0($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(PrimitiveClasses$stringClass, call_0_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            return this.local$tmp$_0.parse_awif5v$(this.local$tmp$, this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ContactApi.prototype.getContactById_61zpoe$ = function (contactId_0, continuation_0, suspended) {
    var instance = new Coroutine$getContactById_61zpoe$(this, contactId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function ContactApi$putContact$lambda(this$ContactApi, closure$contact) {
    return function ($receiver) {
      this$ContactApi.apiUrl_0($receiver);
      $receiver.method = HttpMethod.Companion.Put;
      $receiver.body = new TextContent(Json.Companion.stringify_tf03ej$(Contact$Companion_getInstance().serializer(), closure$contact), ContentType.Application.Json);
      return Unit;
    };
  }
  function Coroutine$putContact_rri8sg$($this, contact_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$contact = contact_0;
  }
  Coroutine$putContact_rri8sg$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$putContact_rri8sg$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$putContact_rri8sg$.prototype.constructor = Coroutine$putContact_rri8sg$;
  Coroutine$putContact_rri8sg$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_0 = Json.Companion.nonstrict;
            this.local$tmp$ = get_map(to(internal.StringSerializer, internal.StringSerializer));
            var $receiver_0 = this.$this.client_0;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Put;
            $receiver_1.body = body;
            ContactApi$putContact$lambda(this.$this, this.local$contact)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call_0($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(PrimitiveClasses$stringClass, call_0_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            return first(this.local$tmp$_0.parse_awif5v$(this.local$tmp$, this.result_0).values);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ContactApi.prototype.putContact_rri8sg$ = function (contact_0, continuation_0, suspended) {
    var instance = new Coroutine$putContact_rri8sg$(this, contact_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$ContactApi$postContact$lambda(closure$contact_0, this$ContactApi_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$contact = closure$contact_0;
    this.local$this$ContactApi = this$ContactApi_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ContactApi$postContact$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContactApi$postContact$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContactApi$postContact$lambda.prototype.constructor = Coroutine$ContactApi$postContact$lambda;
  Coroutine$ContactApi$postContact$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$ContactApi.apiUrl_0(this.local$$receiver, '/' + this.local$closure$contact.id);
            this.local$$receiver.method = HttpMethod.Companion.Post;
            return this.local$$receiver.body = new TextContent(Json.Companion.stringify_tf03ej$(Contact$Companion_getInstance().serializer(), this.local$closure$contact), ContentType.Application.Json), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ContactApi$postContact$lambda(closure$contact_0, this$ContactApi_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ContactApi$postContact$lambda(closure$contact_0, this$ContactApi_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$postContact_rri8sg$($this, contact_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$contact = contact_0;
  }
  Coroutine$postContact_rri8sg$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$postContact_rri8sg$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$postContact_rri8sg$.prototype.constructor = Coroutine$postContact_rri8sg$;
  Coroutine$postContact_rri8sg$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = call(this.$this.client_0, ContactApi$postContact$lambda(this.local$contact, this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0.response;
            return (tmp$ = response.status) != null ? tmp$.equals(HttpStatusCode.Companion.OK) : null;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ContactApi.prototype.postContact_rri8sg$ = function (contact_0, continuation_0, suspended) {
    var instance = new Coroutine$postContact_rri8sg$(this, contact_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function ContactApi$client$lambda$lambda($receiver) {
    $receiver.serializer = new KotlinxSerializer();
    return Unit;
  }
  function ContactApi$client$lambda($receiver) {
    $receiver.install_xlxg29$(JsonFeature.Feature, ContactApi$client$lambda$lambda);
    return Unit;
  }
  ContactApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactApi',
    interfaces: []
  };
  var ApplicationDispatcher;
  var UIDispatcher;
  function apiBaseUrl() {
    return LOCALHOST;
  }
  var package$com = _.com || (_.com = {});
  var package$ynab = package$com.ynab || (package$com.ynab = {});
  var package$di = package$ynab.di || (package$ynab.di = {});
  Object.defineProperty(package$di, 'CommonInjector', {
    get: CommonInjector_getInstance
  });
  Object.defineProperty(Contact, 'Companion', {
    get: Contact$Companion_getInstance
  });
  Object.defineProperty(Contact, '$serializer', {
    get: Contact$$serializer_getInstance
  });
  _.Contact_init_2su8x3$ = Contact_init;
  _.Contact = Contact;
  Object.defineProperty(Name, 'Companion', {
    get: Name$Companion_getInstance
  });
  Object.defineProperty(Name, '$serializer', {
    get: Name$$serializer_getInstance
  });
  _.Name_init_2u6d5w$ = Name_init;
  _.Name = Name;
  Object.defineProperty(Address$Type, 'HOME', {
    get: Address$Type$HOME_getInstance
  });
  Object.defineProperty(Address$Type, 'WORK', {
    get: Address$Type$WORK_getInstance
  });
  Object.defineProperty(Address$Type, 'OTHER', {
    get: Address$Type$OTHER_getInstance
  });
  Address.Type = Address$Type;
  Object.defineProperty(Address, 'Companion', {
    get: Address$Companion_getInstance
  });
  Object.defineProperty(Address, '$serializer', {
    get: Address$$serializer_getInstance
  });
  _.Address_init_gnoguz$ = Address_init;
  _.Address = Address;
  Object.defineProperty(Phone$Type, 'HOME', {
    get: Phone$Type$HOME_getInstance
  });
  Object.defineProperty(Phone$Type, 'WORK', {
    get: Phone$Type$WORK_getInstance
  });
  Object.defineProperty(Phone$Type, 'MOBILE', {
    get: Phone$Type$MOBILE_getInstance
  });
  Object.defineProperty(Phone$Type, 'OTHER', {
    get: Phone$Type$OTHER_getInstance
  });
  Phone.Type = Phone$Type;
  Object.defineProperty(Phone, 'Companion', {
    get: Phone$Companion_getInstance
  });
  Object.defineProperty(Phone, '$serializer', {
    get: Phone$$serializer_getInstance
  });
  _.Phone_init_iumjcc$ = Phone_init;
  _.Phone = Phone;
  ContactCreationUpdate.Presenter = ContactCreationUpdate$Presenter;
  ContactCreationUpdate.View = ContactCreationUpdate$View;
  _.ContactCreationUpdate = ContactCreationUpdate;
  _.ContactCreationUpdatePresenter = ContactCreationUpdatePresenter;
  ContactDetail.Presenter = ContactDetail$Presenter;
  ContactDetail.View = ContactDetail$View;
  var package$presentation = package$ynab.presentation || (package$ynab.presentation = {});
  package$presentation.ContactDetail = ContactDetail;
  package$presentation.ContactDetailPresenter = ContactDetailPresenter;
  ContactList.View = ContactList$View;
  package$presentation.ContactList = ContactList;
  package$presentation.ContactListPresenter = ContactListPresenter;
  package$presentation.PresenterCoroutineScope = PresenterCoroutineScope;
  package$presentation.BasePresenter = BasePresenter;
  var package$api = package$ynab.api || (package$ynab.api = {});
  Object.defineProperty(package$api, 'LOCALHOST', {
    get: function () {
      return LOCALHOST;
    }
  });
  $$importsForInline$$['ktor-ktor-client-core'] = $module$ktor_ktor_client_core;
  package$api.ContactApi = ContactApi;
  Object.defineProperty(package$presentation, 'ApplicationDispatcher_8be2vx$', {
    get: function () {
      return ApplicationDispatcher;
    }
  });
  Object.defineProperty(package$presentation, 'UIDispatcher_8be2vx$', {
    get: function () {
      return UIDispatcher;
    }
  });
  package$api.apiBaseUrl = apiBaseUrl;
  Contact$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Name$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Address$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Phone$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LOCALHOST = '127.0.0.1';
  ApplicationDispatcher = coroutines.Dispatchers.Default;
  UIDispatcher = coroutines.Dispatchers.Main;
  Kotlin.defineModule('addressbook-common', _);
  return _;
}));

//# sourceMappingURL=addressbook-common.js.map
