export async function fetchAddressByCep(cep) {
  const cleanCep = cep.replace(/\D/g, "");
  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
  const data = await response.json();
  if (data.erro) {
    throw new Error("Invalid CEP");
  }

  return {
    street: data.logradouro || "",
    neighborhood: data.bairro || "",
    city: data.localidade || "",
    state: data.uf || "",
    complement: data.complemento || "",
  };
}
