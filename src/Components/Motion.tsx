import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useViewportScroll } from 'framer-motion';

const Wrapper = styled(motion.div)`
  // height: 100vh;
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  flex-wrap: wrap;
`;

const BiggerBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};
const framerHover = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function Motion() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(y, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  useEffect(() => {
    scale.onChange(() => console.log(scale.get()));
  }, [scale]);

  return (
    <Wrapper style={{ background: gradient }}>
      <button onClick={() => x.set(x.get() + 100)}>right</button>
      <button onClick={() => x.set(x.get() - 100)}>left</button>
      <button onClick={() => y.set(y.get() - 100)}>up</button>
      <button onClick={() => y.set(y.get() + 100)}>down</button>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          style={{ x, y, rotateZ, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        />
        <Box
          style={{ x, y, rotateZ, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        ></Box>
        <Box
          style={{ x, y, rotateZ, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        ></Box>
        <Box
          style={{ x, y, rotateZ, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        ></Box>
      </BiggerBox>
      {/* <BiggerBox ref={biggerBoxRef}>
        <BiggerBox ref={biggerBoxRef}></BiggerBox>
        <BiggerBox ref={biggerBoxRef}></BiggerBox>
      </BiggerBox> */}
    </Wrapper>
  );
}

export default Motion;
