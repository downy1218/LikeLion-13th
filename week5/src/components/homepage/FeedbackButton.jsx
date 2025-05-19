import styled from "styled-components";

function FeedbackButton() {
  const review = ["텍스트 후기 작성", "이미지 후기 작성", "소감문 제출(pdf)"];

  return (
    <Container>
      {review.map((item) => {
        return (
          <Box key={item}>
            <p>{item}</p>
          </Box>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-left:150px;
  gap:40px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 16px;
  background: linear-gradient(180deg, #636363 0%, #1c1c1c 100%);
  p {
    color: #fefefe;
    font-size:28px;
  }
`;

export default FeedbackButton;
