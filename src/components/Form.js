import React from 'react'

export default class Form extends React.Component{
    render() {
        return(
            <div className="form-style-3">
                <form onSubmit={this.props.getIp}>
                    <input type="text" name="ip"  class="input-field" placeholder="ingrese el ip..." />
                    <label><span> </span><input type="submit" value="Buscar" /></label>
                </form>
            </div>
        )
    }
}