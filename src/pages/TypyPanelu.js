import React, { useEffect, useState } from 'react';

export default function TypyPanelu() {

  const [revize, setRevize] = useState([]);

  useEffect(() => {
    fetch('api/typy_panelu')
      .then(response => response.json())
      .then(data => {
        setRevize(data);
      })
  }, []);

  return (
    <>
    <h1>Typy panelů</h1>
    <table class="table table-striped w-100 p-3">
      <tbody>
          <tr>
              <th scope="col">ID</th>
              <th scope="col">Typ</th>
              <th scope="col">Výkon</th>
          </tr>
          {revize.map(reviz =>
          <tr>
            <td>{reviz.id}</td>
            <td>{reviz.typ}</td>
            <td>{reviz.vykon}</td>
        </tr>
          )} 
      </tbody>
    </table>  
    </>  
  );
}
