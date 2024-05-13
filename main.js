$(document).ready(function () {
     $('#form-lista').submit(function (e) {
          e.preventDefault(); // Evita o envio padrão do formulário

          // Obtém o valor do campo de entrada 'nomeTarefa'
          // .trim() = Remove espaços em branco
          var nomeTarefa = $('#nomeTarefa').val().trim();

          // Verifica se o nome da tarefa foi digitado
          if (nomeTarefa) {
               if (!tarefaJaExiste(nomeTarefa)) {
                    // Adiciona nova tarefa à lista
                    addTarefa(nomeTarefa);
                    // Limpa o campo de entrada 'nomeTarefa'
                    $('#nomeTarefa').val('');
               } else {
                    // Exibe um alerta sobre a tarefa já estar na lista
                    alert('Essa Tarefa já existe!');
               }
          }
     });

     $('#tarefas').on('click', 'li', function () {
          // Alterna a classe 'checked' do item da lista clicado, riscando ou desriscando o texto
          $(this).toggleClass('checked');
     });
});

function addTarefa(nomeTarefa) {
     // Cria um novo elemento `<li>` com o texto da tarefa
     var li = $('<li>').text(nomeTarefa);
     // Adiciona o novo item da lista à lista existente
     $('#tarefas').append(li);
}

function tarefaJaExiste(nomeTarefa) {
     // Converte o nome da tarefa para minúsculas para comparação sem distinção de maiúsculas e minúsculas
     var nomeTarefaLowerCase = nomeTarefa.toLowerCase();
     // Obtém o texto de todos os itens da lista e converte para minúsculas
     var tarefasExistentes = $('#tarefas li').text().toLowerCase();

     // Verifica se o nome da tarefa em minúsculas está presente nos nomes das tarefas existentes
     return tarefasExistentes.indexOf(nomeTarefaLowerCase) !== -1;
}