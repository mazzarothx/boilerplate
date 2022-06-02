import * as S from './styles'

const Main = ({
  title = 'Mazzaroth.dev',
  description = 'Reprogramando as estrelas'
}) => (
  <S.Wrapper>
    <S.Logo src="vercel.svg" alt="Importante descrever a imagem" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="favicon.ico" alt="Importante descrever a imagem" />
  </S.Wrapper>
)

export default Main
