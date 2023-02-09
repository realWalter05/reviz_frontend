import React, { useEffect, useState } from 'react';

export default function Revize() {

    const [revize, setRevize] = useState([]);

  
    fetch('api/revize')
      .then(response => response.json())
      .then(data => {
        setRevize(data);
      })
  

    return (
      <table class="table table-striped w-100 p-3">
        <tbody>
            <tr>
                <th scope="col">-</th>
                <th scope="col">ID</th>
                <th scope="col">Datum vypracování</th>
                <th scope="col">Datum ukončení revize</th>
                <th scope="col">Datum předání revize</th>
                <th scope="col">Je nová instalace?</th>
                <th scope="col">Distribuční síť</th>
                <th scope="col">Počet fází</th>
                <th scope="col">Počet stringů</th>
                <th scope="col">Jištění</th>
                <th scope="col">Přepětová ochrana</th>
                <th scope="col">Fotka src</th>
            </tr>
            {revize.map(reviz =>
            <tr key={reviz.id}>
                <th scope="row"><a class="text-danger">X</a></th>
                <td>{reviz.id}</td>
                <td>{reviz.datumVypracovani}</td>
                <td>{reviz.datumUkonceniRevize}</td>
                <td>{reviz.datumPredaniRevize}</td>
                <td>{reviz.jeNovaInstalace}</td>
                <td>{reviz.distribucniSit}</td>
                <td>{reviz.pocetFazi}</td>
                <td>{reviz.pocetStringu}</td>
                <td>{reviz.jisteni}</td>
                <td>{reviz.prepetovaOchrana}</td>
                <td>{reviz.fotkaSrc}</td>
            </tr>
            )} 
        </tbody>
      </table>    
    );
}
