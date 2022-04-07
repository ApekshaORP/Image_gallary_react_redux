
import {FetchData} from '../components/services/ApiCall'
jest.mock("../components/services/ApiCall");

test("fetches images from unsplash and renders them on mount", 
    () => {
    FetchData().then(result=>{
expect(result[0].author).toEqual("Alejandro Escamilla");
    })
});