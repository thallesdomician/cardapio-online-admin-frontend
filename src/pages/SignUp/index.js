import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/cardapio.svg";

import { Form, Input } from "@rocketseat/unform";

import * as Yup from "yup";

function equalTo(ref, msg) {
	return this.test({
		name: "equalTo",
		exclusive: false,
		message: msg || "${path} must be the same as ${reference}",
		params: {
			reference: ref.path,
		},
		test: function (value) {
			return value === this.resolve(ref);
		},
	});
}

Yup.addMethod(Yup.string, "equalTo", equalTo);

const schema = Yup.object().shape({
	username: Yup.string()
		.min(6, "Precisa ter no mínimo 6 caracteres")
		.trim("Não pode conter quebras ou espaços")
		.required("Username é obrigatório"),
	firstname: Yup.string().required("Nome é obrigatório"),
	lastname: Yup.string().required("Sobrenome é obrigatório"),
	email: Yup.string()
		.email("Informe um e-mail válido")
		.required("E-mail é obrigatório"),
	password: Yup.string()
		.matches(/[A-Z]/, {
			message: "Precisa conter letras maiúsculas",
			excludeEmptyString: true,
		})
		.matches(/[a-z]/, {
			message: "Precisa conter letras minúsculas",
			excludeEmptyString: true,
		})
		.matches(/[0-9]/, {
			message: "Precisa conter números",
			excludeEmptyString: true,
		})
		.matches(/[@#$%^&+=_-]/, {
			message: "Precisa conter caracteres especiais: @#$%^&+=_-",
			excludeEmptyString: true,
		})
		.min(8, "Precisa ter no mínimo 8 caracteres")
		.required("Senha é obrigatória"),
	password2: Yup.string()
		.required("Repita a senha")
		.equalTo(Yup.ref("password"), "As senhas precisam ser iguais"),
});

export default function SignUp() {
	function handleSubmit(data) {
		console.tron.log(data);
	}

	return (
		<>
			<img src={logo} alt="Cardapio Virtual" />

			<Form schema={schema} onSubmit={handleSubmit}>
				<Input name="username" placeholder="Usuário" />
				<Input name="firstname" placeholder="Nome" />
				<Input name="lastname" placeholder="Sobrenome" />
				<Input type="email" name="email" placeholder="E-mail" />
				<Input type="password" name="password" placeholder="Senha" />
				<Input type="password" name="password2" placeholder="Repita a senha" />

				<button type="submit">Criar Conta</button>

				<Link to="/"> Já tenho Login</Link>
			</Form>
		</>
	);
}
