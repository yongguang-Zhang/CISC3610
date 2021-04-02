/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener('DOMContentLoaded', main);
let title,notes,clearNote;

function main(){
    title = document.getElementById('title');
    notes = document.getElementById('notes');
    clearNote = document.getElementById('clearNote');
    
    title.value = localStorage.getItem('title');
    notes.value = localStorage.getItem('notes');
    
    title.oninput = function(){
        localStorage.setItem('title',title.value);
    }
    
    notes.oninput = function(){
        localStorage.setItem('notes',notes.value);
    }
    
    clearNote.addEventListener('click',clear);
}

function clear(){
    title.value = '';
    notes.value = '';
    localStorage.removeItem('title');
    localStorage.removeItem('notes');
}







    

