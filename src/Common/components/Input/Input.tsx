import React, { Component } from 'react'
interface InputProps {
    onChange:any
}
class Input extends Component<InputProps> {
    render() {
        const { onChange } = this.props;
        return (
            <div>
                <input onChange={onChange} />
                <span>{}</span>
            </div>
        )
    }
}
export { Input }