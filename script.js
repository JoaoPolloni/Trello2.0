document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      e.currentTarget.classList.add('dragging');
    });
  
    card.addEventListener('dragend', e => {
      e.currentTarget.classList.remove('dragging');
    });
  });
  
  document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
      e.preventDefault();
      e.currentTarget.classList.add('cards-hover');
    });
  
    column.addEventListener('dragleave', e => {
      e.currentTarget.classList.remove('cards-hover');
    });
  
    column.addEventListener('drop', e => {
      e.currentTarget.classList.remove('cards-hover');
      const dragCard = document.querySelector('.kanban-card.dragging');
console.log('dragCard no drop:', dragCard);
if (dragCard) {
  e.currentTarget.appendChild(dragCard);
}

    });
  });

  //---------------

  const modalCard = document.getElementById('modalCard');

  //Para cada botão encontrado, executa uma função, onde 'button' é o elemento atual.
  document.querySelectorAll('.add_card').forEach(button => {
    button.addEventListener('click', () => {

      //Seleciona o ancestral kanban-column mais proximo
      const column = button.closest('.kanban-column');
      modalCard.showModal()

      //Botão para fechar modal
      const fecharModal = document.getElementById('fecharModal');
      fecharModal.addEventListener('click', () => {
          modalCard.close();
  })
  })
  });

  const inserirModal = document.getElementById('inserirModal');
  inserirModal.addEventListener('click', () => {
    
    let dadosTarefa = document.getElementById('inputTarefa').value;
    let dadosPrioridade = document.getElementById('dropDown_prioridade').value;
    let dadosEstado = document.getElementById('dropDown_estado').value;
    let dadosPrioridadeCSS = '';

    if (dadosPrioridade == 'low') {
      dadosPrioridadeNovo = 'baixa prioridade';
    } if (dadosPrioridade == 'medium') {
      dadosPrioridadeNovo = 'média prioridade';
    } if (dadosPrioridade == 'high'){
      dadosPrioridadeNovo = 'alta prioridade';
    } {
    }


    function limparInputs() {
      document.getElementById('inputTarefa').value = '';
      document.getElementById('dropDown_prioridade').value = 'low';
      document.getElementById('dropDown_estado').value = 'pendente';
    }

    switch (dadosEstado) {
      case 'pendente':
        inserirCard('.kanban1_pendente');
        break;
      case 'front-end':
        inserirCard('.kanban2 .kanban-cards');
        break;
      case 'back-end':
        inserirCard('.kanban3 .kanban-cards');
        break;
      case 'teste':
        inserirCard('.kanban4 .kanban-cards');
        break;
      case 'concluido':
        inserirCard('.kanban5 .kanban-cards');
        break;
      default:
        console.warn("Estado desconhecido:", dadosEstado);
        break;
    }
    
    function inserirCard(selector) {
      const cardsInsert = document.querySelector(selector);
      cardsInsert.insertAdjacentHTML("beforeend", `
        <div class="kanban-card" draggable="true">
          <div class="badge ${dadosPrioridade}">
            <span>${dadosPrioridadeNovo}</span>
          </div>
          <p class="card-title">${dadosTarefa}</p>
          <div class="card-infos">
            <div class="card-icons">
              <p><i class="fa-solid fa-comment"></i> 1</p>
              <p><i class="fa-solid fa-paperclip"></i> 1</p>
            </div>
            <div class="user">
              <img src="https://github.com/JoaoPolloni.png" alt="Perfil de Polloni">
            </div>
          </div>
        </div>
      `);
    
      document.querySelectorAll('.kanban-card').forEach(card => {
        card.addEventListener('dragstart', e => {
          e.currentTarget.classList.add('dragging');
        });
        card.addEventListener('dragend', e => {
          e.currentTarget.classList.remove('dragging');
        });
      });
    
      modalCard.close();
      limparInputs();
    }
    
    
    function inserirCard(selector) {
      const cardsInsert = document.querySelector(selector);
      cardsInsert.insertAdjacentHTML("beforeend", `
        <div class="kanban-card" draggable="true">
          <div class="badge ${dadosPrioridade}">
            <span>${dadosPrioridadeNovo}</span>
          </div>
          <p class="card-title">${dadosTarefa}</p>
          <div class="card-infos">
            <div class="card-icons">
              <p><i class="fa-solid fa-comment"></i> 1</p>
              <p><i class="fa-solid fa-paperclip"></i> 1</p>
            </div>
            <div class="user">
              <img src="https://github.com/JoaoPolloni.png" alt="Perfil de Polloni">
            </div>
          </div>
        </div>
      `);
    
      // Precisa adicionar event listeners para drag n drop após novo card ser inserido
      document.querySelectorAll('.kanban-card').forEach(card => {
        card.addEventListener('dragstart', e => {
          e.currentTarget.classList.add('dragging');
        });
        card.addEventListener('dragend', e => {
          e.currentTarget.classList.remove('dragging');
        });
      });
    
      modalCard.close();
      limparInputs();
    }
})