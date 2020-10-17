import Head from "next/head";
import { useReducer, useState } from "react";
import { countWords } from "../utils/utils";
// import Button from '@material-ui/core/Button';
import { MdFormatColorText } from "react-icons/md";
const initialState = {
  writtenText: "",
  wordCount: 0,
  charactersCount: 0,
};

function reducer(state, action) {
  if (action.type === "writeText") {
    const { payload } = action;

    return {
      writtenText: payload,
      wordCount: countWords(payload),
      charactersCount: payload.replaceAll(" ", "").length,
    };
  } else if (action.type === "deleteText") {
    return initialState;
  } else {
    throw new Error();
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("stttt0", state);
  return (
    <>
      <Head>
        <title>Contador de Palabras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-300 p-4 flex justify-between items-center text-gray-700">
          <div className="flex items-center">
            {/* <img
            src="https://cdn.dribbble.com/assets/dribbble-ball-icon-e94956d5f010d19607348176b0ae90def55d61871a43cb4bcb6d771d8d235471.svg"
            width="50"
            alt="Logo"
            className="mr-2"
          /> */}
            <MdFormatColorText size={50} />
            {/* <a href="#" className="inline-block p-2  hover:text-black mr-2">
              Explore
            </a>
            <a href="#" className="inline-block p-2  hover:text-black">
              For Designers{" "}
            </a>
            <a href="#" className="inline-block p-2  hover:text-black">
              Hiring Designers?
            </a> */}
          </div>
          <div className="hidden md:block"></div>
        </header>
        <main className="flex-grow">
          <div className="container mx-auto my-5 justify-between flex font-bold">
            <div className="justify-evenly">
              <p className="mx-1">Numero de palabras: {state.wordCount}</p>
              <p className="mx-1">
                Numero de caracteres: {state.charactersCount}
              </p>
            </div>
            <div className="justify-evenly">
              <button
                className="inline-block py-1 px-2 text-white bg-pink-600 hover:bg-pink-300 hover:text-white rounded transition ease-in duration-150 font-bold"
                onClick={() => dispatch({ type: "deleteText" })}
              >
                Borrar Texto
              </button>
            </div>
          </div>

          <div className="container mx-auto my-5">
            <textarea
              className="h-64 w-full border-blue-700 border-4 focus:border-pink-500"
              value={state.writtenText}
              name="textAreaWordCount"
              // onChange={(e) => countersFn(e)}
              onChange={(e) =>
                dispatch({ type: "writeText", payload: e.target.value })
              }
              placeholder="Escribe texto aqui..."
            ></textarea>
          </div>
          <div className="container mx-auto my-5">
            <h3 className='font-bold'>Como usar el Contador de Palabras?</h3>
            <p>
             Contador de palabras es una aplicacion creada para contar el numero de palabras y el numero de caracteres que tiene un texto. Para usar la aplicacion solamente tienes que escribir en el area de texto y la aplicacion te mostrara cuantas palabras y caracteres tiene lo que has escrito. Usa el boton de Borrar para para comenzar de nuevo. 
            </p>
          </div>
        </main>
        <footer className="h-10 bg-pink-600 flex justify-end">
          <p className='mx-2 my-0 leading-10'></p>
        </footer>
      </div>
    </>
  );
}
