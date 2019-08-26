import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo="Today at 4:45pm" 
                    content="Nice blog post"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo="Today at 2:00am" 
                    content="I like the subject"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo="Yesterday at 5:00pm" 
                    content="I like the writing"
                />
            </ApprovalCard>
            
            
        </div>
    );
};

ReactDom.render(
    <App />, document.querySelector('#root')
);