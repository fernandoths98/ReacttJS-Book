import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react"

export const App = () => {

  const [buku, setBuku] = useState([])

  const fetchBuku = () => {
    fetch("https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories")
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setBuku(data)
    })
  }

  useEffect(() =>{
    fetchBuku()
  }, [])

  return (
    <div className="App">
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
       Sejuta Cita
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <input
          class="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">ID Buku</th>
                    <th scope="col">Nama Buku</th>
                  </tr>
                </thead>
                <tbody>
                  {buku.length > 0 && (
                    <tr>
                      {buku.map(buku => (
                        <td key={buku.id}>{buku.name}</td>
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
