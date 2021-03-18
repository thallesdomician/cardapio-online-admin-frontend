import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/cardapio.svg";

import { Form, Input } from "@rocketseat/unform";

import * as Yup from "yup";

const schema = Yup.object().shape({
	username: Yup.string().required("Username é obrigatório"),
	password: Yup.string().required("Senha é obrigatória"),
});

export default function SignIn() {
	function handleSubmit(data) {
		console.tron.log(data);
	}
	return (
		<>
			<img src={logo} alt="Cardapio Virtual" />

			<Form schema={schema} onSubmit={handleSubmit}>
				<Input name="username" placeholder="Username" />
				<Input name="password" type="password" placeholder="Senha" />

				<button type="submit">Acessar</button>

				<Link to="/register"> Criar Conta</Link>
			</Form>
		</>
	);
}
