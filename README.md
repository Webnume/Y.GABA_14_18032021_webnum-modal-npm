# webnum-modal-react

A library of React components created using `create-react-app`.

## Installation

Run the following command:
> `npm i webnum-modal-react`

## How to

First you need to import the Modal :

> `import { Modal } from 'webnum-modal-react';`

Then you can use the component :

1. Declare 
> `const [show, setShow] = useState(false);`
2. Integrate
> `<Modal onClose={() => setShow(false)} show={show}> <p>Your content !</p> </Modal>`
3. Activate
> `<button onClick={() => setShow(true)}>Show Modal</button>`

## FIND IT ON NPM 

https://www.npmjs.com/package/webnum-modal-react