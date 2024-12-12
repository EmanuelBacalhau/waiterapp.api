# WaiterApp

WaiterApp é uma aplicação desenvolvida em Node.js e MongoDB para gerenciar pedidos em um restaurante. O projeto utiliza o Express.js para a criação de APIs RESTful, o Mongoose para modelagem de dados e o Socket.io para comunicação em tempo real.

## Funcionalidades

- **Categorias**:

  - Listar categorias
  - Criar novas categorias

- **Produtos**:

  - Listar produtos
  - Criar novos produtos (upload de imagens incluído)
  - Listar produtos por categoria

- **Pedidos**:
  - Listar pedidos
  - Criar novos pedidos
  - Alterar o status de um pedido
  - Cancelar um pedido

## Tecnologias Utilizadas

- **Backend**:

  - Node.js
  - Express.js
  - Mongoose
  - Socket.io
  - Multer (para upload de arquivos)

- **Banco de Dados**:
  - MongoDB

## Estrutura do Projeto

```
src/
├── app/
│   ├── models/
│   │   ├── Category.ts
│   │   ├── Order.ts
│   │   └── Product.ts
│   ├── useCases/
│       ├── categories/
│       │   ├── createCategories.ts
│       │   ├── listCategories.ts
│       │   └── listProductsByCategory.ts
│       ├── orders/
│       │   ├── cancelOrder.ts
│       │   ├── changeOrderStatus.ts
│       │   ├── createOrder.ts
│       │   └── listOrders.ts
│       └── products/
│           ├── createProduct.ts
│           └── listProducts.ts
├── uploads/ (diretório para armazenamento de imagens)
├── index.ts
├── routes.ts
```

## Endpoints da API

### Categorias

- **GET /categories**

  - Lista todas as categorias.

- **POST /categories**
  - Cria uma nova categoria.
  - **Body**:
    ```json
    {
      "name": "string",
      "icon": "string"
    }
    ```

### Produtos

- **GET /products**

  - Lista todos os produtos.

- **POST /products**

  - Cria um novo produto.
  - **Form-Data**:
    - `image` (arquivo de imagem)
    - `name` (string)
    - `description` (string)
    - `price` (number)
    - `ingredients` (JSON array)
    - `category` (ID da categoria)

- **GET /categories/:categoryId/products**
  - Lista os produtos de uma categoria específica.

### Pedidos

- **GET /orders**

  - Lista todos os pedidos.

- **POST /orders**

  - Cria um novo pedido.
  - **Body**:
    ```json
    {
      "table": "string",
      "products": [
        {
          "product": "ID do produto",
          "quantity": 1
        }
      ]
    }
    ```

- **PATCH /orders/:orderId**

  - Altera o status de um pedido.
  - **Body**:
    ```json
    {
      "status": "WAITING | IN_PRODUCTION | DONE"
    }
    ```

- **DELETE /orders/:orderId**
  - Cancela um pedido.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/waiterapp.git
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Configure o banco de dados MongoDB. O padrão é `mongodb://localhost:27017/waiterapp`.

4. Inicie o servidor:

   ```bash
   yarn dev
   ```

5. Acesse a aplicação em `http://localhost:3001`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.
