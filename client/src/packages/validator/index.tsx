import * as React from 'react';
import * as monaco from 'monaco-editor';
import { is, assertType, setDefaultGetErrorObject } from 'typescript-is'
import { Button } from 'antd';
import axios from 'axios';

import * as TJS from 'typescript-json-schema';
import yup from 'yup';
import Ajv from 'ajv';
// import schema from './schema.json';
import { resolve } from "path";

import { Products, Productys } from './type';
import { ThrowReporter } from "io-ts/lib/ThrowReporter";
import { String, Number, Boolean, Record, Static, Array } from 'runtypes';
import {
  Validator, tObject, tString, tNumber, tBoolean, optional
} from 'runtime-validator';
import './index.scss';

setDefaultGetErrorObject(() => null);

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
  required: true
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
  strictNullChecks: true
}

function getProducts() {
  // A mock REST API response
  const apiResponse = [{
    id: 1,
    name: "Table",
    type: "FURNITURE",
    quantity: 5
  }, {
    id: 4,
    name: "The Lord of the Rings",
    type: "BOOK",
    quantity: 10
  }];
  // Decode i.e. validate the api response
  const result = Products.decode(apiResponse);
  // Use a reporter to throw an error if validation fails
  ThrowReporter.report(result);
  // Get the validated value and use it in your application
  // return result.value;
}

getProducts();

const Todo = Record({
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean
})

type Todo = Static<typeof Todo>
const todos = {
  userId: 23,
  id: 45,
  title: '131',
  completed: true
}

// optionally pass a base path

const { useRef, useEffect } = React;

interface ITest {
  abs: [string]
}

const a = {
  abs: ''
}
console.log(43000, is)
// console.log(assertType<ITest>(a))
// console.log(123, is<number>('42'))

interface ITip {
  length: number;
}

interface MyType {
  id: string;
}

interface Pet {
  name: string;
  species: string;
  age?: number;
  isCute?: boolean;
  tip: ITip
}

const petValidator: Validator<Pet> = tObject({
  name: tString(),
  species: tString(),
  age: optional(tNumber()),
  isCute: optional(tBoolean()),
  tip: tObject({
    length: tNumber()
  })
})

/**@type{Pet}**/
const petIns = {
  name: 'carl',
  age: 28,
  isCute: true,
  species: 'abc'
}
// console.log('runtime-validator', petValidator.asException(petIns));

const DataValidator = () => {

  const schemaConfig = {
    language: 'json',
    theme: 'vs-dark',
    value: '{}'
  };
  const dataConfig = {
    language: 'typescript',
    theme: 'vs-dark',
    value: 'interface ITest {}'
  }
  const schemaRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);

  const Todo = Record({
    total: Number,
    items: String
  })
  axios.get('/data').then((res) => {
    console.log(5555, res);
  })



  var ajv = new Ajv({ $data: true });

  var validData = {
    propA: 1,
    propB: '234',
    propC: ''
  };

  // console.log(444, ajv.validate(schema, validData)); // true

  useEffect(() => {
    // const schemaEditor = monaco.editor.create(schemaRef.current as HTMLDivElement, schemaConfig);
    // const dataEditor = monaco.editor.create(dataRef.current as HTMLDivElement, dataConfig);
    // return () => {
    //   if (schemaEditor?.dispose) {
    //     schemaEditor.dispose();
    //   }
    //   if (dataEditor?.dispose) {
    //     dataEditor.dispose();
    //   }
    // }
  })
  const settings: TJS.PartialArgs = {
    required: true
  };



  const onClick = () => {
    const a: ITest = {
      abs: ['234']
    }
    // console.log(10000, is)
    // console.log(typeof a === 'ITest')
  }

  return <div className='validator-container'>
    <div className="controller">
      <Button onClick={onClick}>校验数据</Button>
    </div>
    <div className="schema" ref={schemaRef}></div>
    <div className="data" ref={dataRef}></div>
  </div>
}

export default DataValidator;