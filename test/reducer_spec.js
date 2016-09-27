import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', ()=>{
	it('handles SET_ENTRIES', ()=>{
		const initialState = Map();
		const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			entries: ['Trainspotting']
		}));
	});

	it('handles NEXT', ()=>{
		const initialState = fromJS({
			entries: ['Trainspotting', '28 Days Later']
		});
		const action = {type: 'NEXT'};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote:{
				pair: ['Trainspotting','28 Days Later']
			},
			entries: []
		}));
	});

	it('handles VOTE', ()=>{
		const initialState = fromJS({
			vote:{ 
				pair: ['Trainspotting', '28 Days Later']
			},
			entries: []
		});
		const action = {type: 'VOTE', entry: '28 Days Later'};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote:{ 
				pair: ['Trainspotting', '28 Days Later'],
				tally: {'28 Days Later' : 1}
			},
			entries: []
		}));
	});

	it('has an initial state', ()=>{
		
		const action = {type: 'SET_ENTRIES', entries: ['28 Days Later']};
		const nextState = reducer(undefined, action);

		expect(nextState).to.equal(fromJS({
			entries: ['28 Days Later']
		}));
	});

	it('can be used with reduce', ()=>{
		
		const actions =[ 
		{type: 'SET_ENTRIES', entries: ['28 Days Later','Trainspotting']},
		{type: 'NEXT'},
		{type: 'VOTE', entry:'28 Days Later'},
		{type: 'VOTE', entry:'28 Days Later'},
		{type: 'VOTE', entry:'Trainspotting'},
		{type: 'NEXT'}
		];
		const finalState = actions.reduce(reducer, Map());

		expect(finalState).to.equal(fromJS({
			winner: '28 Days Later'
		}));
	});


	
})