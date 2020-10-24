import './login.css';
import '../Colors.css';
import '../Fonts.css';
import '../Links.css';
import { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		}
	}
	toggle() {
		var popupElement = document.getElementById("Signup");

		if (popupElement.classList.contains("Disabled")) {
			popupElement.classList.remove("Disabled");
		} else {
			popupElement.classList.add("Disabled");
		}
	}

	onSubmit = async () => {
		console.log(this.state);
		const result = await fetch("http://localhost:4000/user/login", {
			method: "POST",
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			}),
			headers: { "Content-Type": "application/json"}
		})

		if (result.status !== 200) {
			return console.log("Login failed with error code: ", result.status);
		}

		const body = await result.json();
		const token = body["data"]["token"];
		localStorage.setItem("token", token);
		const fetchedToken = localStorage.getItem("token");
	}

	onChangeUsername = (event) => {
		this.setState({ username: event.target.value });
	}

	onChangePassword = (event) => {
		this.setState({password: event.target.value});
	} 

	render() {
		return (
			<div className="Login-Screen">
				<div className="Form-Container Login" id="Login">
					<div className="Form">
						<header className="Login-Header">LOGIN</header>
						<div className="Input-Field">
							<label for="uname">Username</label>
							<input onChange={this.onChangeUsername} type="text" placeholder="Enter Username" name="username" required />
						</div>
						<div className="Input-Field">
							<label for="pword">Password</label>
							<input onChange={this.onChangePassword} type="password" placeholder="Enter Password" name="password" required />
						</div>
						<div className="Input-Field">
							<button onClick={this.onSubmit} type="submit">Submit</button>
						</div>
						<div className="Remember-Me-Container">
							<input className="Checkbox" type="checkbox" checked="checked" name="remember" />Remember me
				</div>
					</div>
					<div className="Other-Container">
						<div><a onClick={this.toggle} className="Link-Signup">Sign up</a></div>
						<div>Forgot <a href="" className="Link-Forgotpassword">password</a>?</div>
					</div>
					<div className="Bottom"></div>
				</div>
		  

				<div className="Form-Container Signup Disabled" id="Signup">
					<div className="Form">
						<header className="Login-Header">SIGN UP</header>
						<div className="Input-Field">
							<label for="uname">Username</label>
							<input type="text" placeholder="Enter Username" name="username" required />
						</div>
						<div className="Input-Field">
							<label for="pword">Password</label>
							<input type="password" placeholder="Enter Password" name="password" required />
						</div>
						<div className="Input-Field">
							<label for="pword">Password</label>
							<input type="password" placeholder="Repeat Password" name="password" required />
						</div>
						<div className="Input-Field">
							<label for="uname">First Name</label>
							<input type="text" placeholder="Enter First Name" name="username" required />
						</div>
						<div className="Input-Field">
							<label for="uname">Last Name</label>
							<input type="text" placeholder="Enter Last Name" name="username" required />
						</div>
						<div className="Input-Field">
							<button type="submit">Sign Up</button>
						</div>
						<div className="Remember-Me-Container">
							<input className="Checkbox" type="checkbox" checked="checked" name="remember" />Remember me
				</div>
					</div>
					<div className="Other-Container">
						<div><a onClick={this.toggle} className="Link-Signup">Back</a></div>
						<div>Forgot <a href="" className="Link-Forgotpassword">password</a>?</div>
					</div>
					<div className="Bottom"></div>
				</div>
			</div>
		);
	}
}

export default Login;