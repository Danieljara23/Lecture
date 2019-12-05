import {Sum} from "../components/Sum/index";

describe('Sum Component', () => {
    it('adds 1  + 2  to equal 3', ()=>{
        expect( 1 + 2 ).toEqual(3);
    })

    // it('Sums 2 numbers', () => {
    //     expect(Sum(1, 2)).toEqual(3);
    // });

    // it('should add correctly when first param is not a number', () => {
    //     expect(Sum('Something',2)).toEqual(2);
    // })

    // it('should return a message when any param is not a number', () => {
    //     expect(Sum('Something',2)).toEqual("There's an error in your parameters, please verify, and thanks for use this calculator!");
    // })
    
});
