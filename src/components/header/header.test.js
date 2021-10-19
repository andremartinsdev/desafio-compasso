import '@testing-library/jest-dom'
import { starred } from "../../__mocks__/starred";
import api from "../../services/client";
import { repos } from "../../__mocks__/repos";
import { user } from "../../__mocks__/user";
import axios from "axios";
import { render, screen } from '@testing-library/react';
import Header from './index'



describe("test requests for github api", () => {
    it("must return an object array containing the items the user starred", async () => {
        const { data } = await api.get(`/andremartinsdev/starred`, {
            headers: {
                Authorization: 'Bearer ' + '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'
            }
        })
        expect(data).toEqual(starred)
    })

    
    it("should return an object array containing the repositories", async () => {
        const { data } = await api.get(`/EriksJunior/repos`, {
            headers: {
                Authorization: 'Bearer ' + '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'
            }
        })
        expect(data).toMatchObject(repos)
    })


    it("should return an object array containing the user", async () => {
        const { data } = await api.get(`/andremartinsdev`, {
            headers: {
                Authorization: 'Bearer ' + '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'
            }
        })
        console.log(data)
        expect(data).toMatchObject(user)
    })


   
    it("must return the user's token that is generated by server.js (server to handle authentication with the api)", async () => {
        const { data } = await axios.get('http://localhost:3002/auth/token')
        expect(data).toMatchObject({"token": data.token})
    })
})


describe("Testing Header component", () => {
    it("the title must starting", ()=>{
        render(<Header/>);
        const title = screen.getByText("Github Profile");
        expect(title).toBeInTheDocument()
        expect(title).toHaveClass("c-header__title")
    })
})

