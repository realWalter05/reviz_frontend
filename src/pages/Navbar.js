import Revize from "./Revize";
import TypyPanelu from "./TypyPanelu";
import { Route } from "react-router-dom";


export default function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-dark p-3">
        <div class="container-fluid">
            <a class="navbar-brand display-3 text-white" href="/">Reviz</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/revize">Revize</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/typy_panelu">TypyPanelu</a>    
                    </li>                    
                </ul>
            </div>
        </div>
    </nav>
  );
}
