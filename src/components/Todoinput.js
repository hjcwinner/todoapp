import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const {item, onChange, onSubmit, editItem} = this.props
    console.log(editItem)
    return (
      <div className="card card-body my-3">
          <form onSubmit={onSubmit}>
              <div className="input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text bg-primary text-white">
                          <i className="fas fa-book" />
                      </div>
                  </div>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="할일을 입력하세요"
                    value={item}
                    onChange={onChange}
                  />
              </div>
              <button type="submit" 
              className={
                editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
                  {editItem ? "수정" : "제출"}
              </button>
          </form>
      </div>
    );
  }
}
