import React, { Component } from 'react';
import like1 from './icons/likes/like1.svg';
import like2 from './icons/likes/like2.svg';
import dislike1 from './icons/likes/dislike1.svg';
import dislike2 from './icons/likes/dislike2.svg';

const itemStyle = {
    padding: '1%',
    borderBottom: '1px solid #e6e5e5'
}

const iconStyle = {
    width: 'inherit',
    height: 'inherit'
}

export default class TagItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: undefined
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    handleLike() {
        this.setState({
            liked: true
        }, () => {
            // this.props.cb(this.state.liked);
        })

    }

    handleDislike() {
        this.setState({
            liked: false
        }, () => {
            // this.props.cb(this.state.liked);
        })

    }

    render() {
        const like = this.state.liked === true ? like2:like1;
        const dislike = this.state.liked === false ? dislike2:dislike1;
        return (
                <div className={'row'} style={itemStyle}>
                    <div className={'col-7'}>
                        Great Hostel Facilities Great Hostel Great Hostel
                    </div>
                    <div className={'col-2'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <img src={like} className="Review-icon" style={iconStyle} alt="like"/>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                3
                            </div>
                        </div>
                    </div>
                    <div className={'col-2 offset-1'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <img src={dislike} className="Review-icon" style={iconStyle} alt="like"/>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12'}>
                               12
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}