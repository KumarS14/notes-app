/**
 * @jest-environment jsdom
 */

const { equal } = require('assert');
const fs = require('fs');
 ViewNotes = require('./NotesView');

describe('Page View', () => {
    it('displays zero notes', () => {
      
  
      const viewNotes = new ViewNotes();
      expect(viewNotes.notes).toEqual([])
      
    });
  });
