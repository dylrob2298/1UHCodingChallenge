import React, { useState } from 'react';
import './App.css';
import userAuth from './services/userAuth';
import connectEpic from './services/connectEpic';
import getEverything from './services/getEverything';
import allPatients from './services/allPatients';

function App() {

  const [authToken, setAuthToken] = useState('');
  const [epic, setEpic] = useState(null);
  const [everything, setEverything] = useState('');
  const [patients, setPatients] = useState('');

  const getAuthToken = async () => {
    let res = await userAuth.getUserAuth();
    console.log(res)
    setAuthToken(res)
  }

  const connect = async () => {
    let res = await connectEpic.connectEpic()
    console.log(res)
    setEpic(res)
  }

  const getEverythingInfo = async () => {
    let res = await getEverything.getEverything(0)
    let entries = res.entry
    console.log(res)
    let link = res.link

    while(link) {
      let res2 = await getEverything.getEverything(link[1].url)
      entries = entries.concat(res2.entry)
      link = res2.link

    }


    setEverything(entries)
    // displayEverything()
  }

  const getAllPatients = async () => {
    let res = await allPatients.allPatients()
    console.log(res)
    setPatients(res)
  }

  // const displayEverything = () => {
  //   let entries = everything.entry
  //   console.log(entries)
  //   for(let entry in entries) {
  //     let cur = entries[entry]
  //     console.log(cur)
  //     let resource = cur.resource
  //     let resourceType = resource.resourceType
  //     console.log(resourceType)
  //     let category = resource.category.text
  //     console.log(category)
  //     let code = resource.code.text
  //     console.log(code)

  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getAuthToken}>
          Get auth token
        </button>
        {(epic) ? (epic.map(link => <a href={link}>{link}</a>)) : (
          <button onClick={connect}>
            Log into Epic
          </button>
        )}
        
        <p>{authToken}</p>
        <p>Patients: </p>
        <button onClick={getAllPatients}>
          Get patients
        </button>
        <p>Patient Everything Info</p>
        <button onClick={getEverythingInfo}>
          Get Everything
        </button>
        <div><pre>{JSON.stringify(everything, null, 2)}</pre></div>
      </header>
    </div>
  );
}

export default App;
