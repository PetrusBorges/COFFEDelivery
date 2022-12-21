// Styled-Components
import { Container, Content, InforContainer, Info } from './styles';

// Images
import Coffe from '../../assets/images/coffe.svg';
import Car from '../../assets/images/car.svg';
import Like from '../../assets/images/like.svg';
import Time from '../../assets/images/time.svg';
import BackGround from '../../assets/images/homeImage.png';

export function Header() {
  return (
    <Container>
      <Content>
        <InforContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia!</h1>
          <small>Com o Coffe Delivery você recebe seu café onde estiver.</small>

          <Info>
            <div className="containerInfo">
              <img src={Car} alt="Car" />
              <small>Embalagem mantém o café intacto.</small>
            </div>

            <div className="containerInfo">
              <img src={Coffe} alt="Car" />
              <small>O café chega fresquinho até você.</small>
            </div>

            <div className="containerInfo">
              <img src={Like} alt="Car" />
              <small>Compra simples e segura.</small>
            </div>

            <div className="containerInfo">
              <img src={Time} alt="Car" />
              <small>Entrega rápida e rastreada.</small>
            </div>
          </Info>
        </InforContainer>

        <img src={BackGround} alt="BackGround" />
      </Content>
    </Container>
  );
}
