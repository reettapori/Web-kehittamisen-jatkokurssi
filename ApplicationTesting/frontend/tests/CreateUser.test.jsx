//Tämä yksikkötesti testaa CreateUser-toimintoa seuraavasti: 
//Komponentin renderöinti ja lomakkeen täyttäminen: Testi varmistaa, että lomakkeen kentät voidaan täyttää oikeilla arvoilla (esim. nimimerkki "TestUser", email "test@example.com").
//API-kutsun simulointi: Testissä mockataan axios.post-kutsu niin, että se ei tee oikeaa verkkopyyntöä, vaan palauttaa simuloidun vastauksen.
//Onnistumisviesti: Testi tarkistaa, että lomakkeen lähettämisen jälkeen DOM:iin ilmestyy viesti, joka kertoo, että nimimerkki on lisätty. Tämä viesti tulee API-vastauksesta.

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateUser from "../src/components/CreateUser";
import axios from "axios";
import { vi } from "vitest";

// ✅ Korjattu axios-mock
vi.mock("axios", async () => {
  const actualAxios = await vi.importActual("axios");
  return {
    ...actualAxios,
    default: {
      ...actualAxios.default,
      post: vi.fn(() => Promise.resolve({ data: { nimimerkki: "TestUser" } })),
    },
  };
});

const mockFetchUsers = vi.fn();

test("lomakkeen lähettäminen kutsuu APIa ja näyttää viestin", async () => {
  render(<CreateUser fetchUsers={mockFetchUsers} />);

  fireEvent.change(screen.getByPlaceholderText("Nimimerkki"), { target: { value: "TestUser" } });
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByPlaceholderText("Ikä"), { target: { value: "25" } });
  fireEvent.change(screen.getByPlaceholderText("Kaupunki"), { target: { value: "Helsinki" } });
  fireEvent.change(screen.getByPlaceholderText("Päivämäärä"), { target: { value: "2025-03-23" } });

  fireEvent.click(screen.getByText("Lähetä"));

  // ✅ Odotetaan, että API-vastaus päivittyy DOM:iin
  await waitFor(() => {
    expect(screen.getByText(/Nimimerkki lisättiin: TestUser/i)).toBeInTheDocument();
  });

  expect(mockFetchUsers).toHaveBeenCalled();
});
