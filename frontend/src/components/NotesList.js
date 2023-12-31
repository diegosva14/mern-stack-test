import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
const API_URI = 'https://mern-stack-test.onrender.com/api/notes';
export default class NotesList extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.getNotes()
    }
    async getNotes() {
        const res = await axios.get(API_URI)
        this.setState({ notes: res.data })
    }
    deleteNote = async (id) => {
        await axios.delete('https://mern-stack-test.onrender.com/api/notes/' + id);
        this.getNotes();
    }


    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">

                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>
                                    <Link className="btn btn-secondary" to={"./edit/" + note._id}>
                                        Edit
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <p>{note.author}</p>
                                    <p>{format(note.updatedAt)}</p>
                                </div>
                                <div className="card-footer">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.deleteNote(note._id)}
                                    >
                                        Delete
                                    </button>
                                    <button className='btn btn=danger' onClick={() => {if(window.confirm('Are you sure you want to delete this note?')) this.deleteNote(note._id)}}>
                          
                        </button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
