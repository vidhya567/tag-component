import React, { Component } from 'react';
import TagItem from './TagItem';

const addButttonStyle = {
    fontSize: '0.75rem'
}

export default class TagComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'container TagWrapper'}>
                <div className={'row'}>
                    <div className={'col-sm-6'}>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Say Something Special about this college" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-success" style={addButttonStyle} type="button">
                                                Add
                                                <br/> 29
                                            </button>
                                        </div>
                                </div>
                            </div>
                            <TagItem/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}