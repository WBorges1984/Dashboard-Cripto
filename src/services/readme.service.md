Este componente React é responsável por estabelecer uma conexão WebSocket com a API de streaming da Binance para obter dados de negociação em tempo real de uma criptomoeda específica (dada pelo prop cripto). Ele exibe esses dados em um componente de cartão chamado CardCripto, que mostra o preço atual da criptomoeda e a mudança percentual em relação ao preço de abertura.

Aqui está uma explicação do que cada parte do código faz:

Imports:

useEffect e useState são hooks do React utilizados para lidar com efeitos colaterais e o estado do componente, respectivamente.
CardCripto é o componente que será renderizado para exibir os dados da criptomoeda.
WebSocketComponent:

É uma função de componente React que aceita props.
Inicializa estados para armazenar o último negócio (lastTrade), o preço de abertura (openPrice) e a mudança percentual (percentageChange) da criptomoeda.
Utiliza o hook useEffect para estabelecer a conexão WebSocket com a API da Binance quando o componente é montado.
Quando a conexão é estabelecida, ele registra manipuladores de eventos para mensagens recebidas, conexão aberta e conexão fechada.
Utiliza o hook useEffect para calcular a mudança percentual com base no preço atual e no preço de abertura sempre que esses valores mudam.
Retorna o JSX para renderizar o componente CardCripto com os dados atualizados da criptomoeda ou uma mensagem de espera se os dados ainda não foram recebidos.
Renderização Condicional:

A renderização condicional é usada para exibir o componente CardCripto apenas quando os dados do último negócio estiverem disponíveis. Caso contrário, exibe uma mensagem de "Aguardando dados...".
Classes de Estilo:

A variável changeClass é usada para determinar a classe de estilo a ser aplicada ao componente CardCripto, com base na mudança percentual. Se a mudança for positiva, aplica a classe 'green', se for negativa, aplica a classe 'red', caso contrário, não aplica nenhuma classe.
No geral, este componente é uma maneira eficaz de exibir dados de negociação em tempo real de uma criptomoeda específica em um aplicativo React.