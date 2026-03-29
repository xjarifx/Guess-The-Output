import React from 'react';

export const PixelSprite = ({ sprite, className = "w-6 h-6 inline-block", color = "currentColor" }) => {
  const height = sprite.length;
  const width = Math.max(...sprite.map(r => r.length));
  
  const rects = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < sprite[y].length; x++) {
      if (sprite[y][x] === 'X') {
        rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />);
      }
    }
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} style={{ shapeRendering: 'crispEdges' }}>
      {rects}
    </svg>
  );
};

const SPRITE_HEART = [".XX...XX.","XXXX.XXXX","XXXXXXXXX",".XXXXXXX.","..XXXXX..","...XXX...","....X...."];
const SPRITE_CROWN = ["X.......X","XX..X..XX","XXX.X.XXX","XXXXXXXXX","XXXXXXXXX"];
const SPRITE_SKULL = ["..XXXXX..",".XXXXXXX.","XX.XXX.XX","XXXXXXXXX",".XXX.XXX.","..X.X.X.."];
const SPRITE_NERD =  [".XXXXXXX.","X.X.X.X.X","XXX.X.XXX",".XXXXXXX.","..X...X..","...XXX..."];
const SPRITE_ROCKET = ["....X....","...XXX...","..X.X.X..","..XXXXX..",".XX...XX.","XX.....XX"];
const SPRITE_ARROW_R =["....X..",".....X.","XXXXXXX",".....X.","....X.."];
const SPRITE_SOUND_ON =[
  "...X.....",
  "..XX.X.X.",
  ".XXX.X.X.",
  "XXXX.X.X.",
  ".XXX.X.X.",
  "..XX.X.X.",
  "...X....."
];
const SPRITE_SOUND_OFF=[
  "...X.....",
  "..XX..X..",
  ".XXX.X.X.",
  "XXXX..X..",
  ".XXX.X.X.",
  "..XX..X..",
  "...X....."
];
const SPRITE_HOME = ["...X...","..XXX..",".X.X.X.","XXXXXXX","..XXX..","..X.X.."];
const SPRITE_PARTY = ["..X....","X.X.X..",".X.XX..","...XXX.","....XX.","....X.."];
const SPRITE_REFRESH=[".XXX...","X...X.X","X....XX","X...X..",".XXX..."];
const SPRITE_COOL =  ["XXXXXXXXX","X.X.X.X.X","XXXXXXXXX",".........","..XXXXX..","...XXX..."];
const SPRITE_THINK = ["...XX..","..X..X.","...XX..","......X","...X...","...X..."];
const SPRITE_DIZZY = [".XXXXX.","X.....X","X.XXX.X","X...X.X",".XXX...","......."];
const SPRITE_OOPS =  [".XXXXX.","X..X..X",".XXXXX.",".XX.XX.",".X...X.","..XXX.."];
const SPRITE_WIZARD = ["...X...","..X.X..","X.....X","X..X..X","XXXXXXX","..X.X.."];
const SPRITE_INFINITY = ["..XX...XX..",".X..X.X..X.",".X...X...X.",".X..X.X..X.","..XX...XX.."];
const SPRITE_HOURGLASS = ["XXXXXXXXX",".X.....X.","..X...X..","...X.X...","....X....","...X.X...","..XXXXX..",".XXXXXXX.","XXXXXXXXX"];

export const PixelHeart = (props) => <PixelSprite sprite={SPRITE_HEART} {...props} />;
export const PixelCrown = (props) => <PixelSprite sprite={SPRITE_CROWN} {...props} />;
export const PixelSkull = (props) => <PixelSprite sprite={SPRITE_SKULL} {...props} />;
export const PixelNerd = (props) => <PixelSprite sprite={SPRITE_NERD} {...props} />;
export const PixelRocket = (props) => <PixelSprite sprite={SPRITE_ROCKET} {...props} />;
export const PixelArrowRight = (props) => <PixelSprite sprite={SPRITE_ARROW_R} {...props} />;
export const PixelSoundOn = (props) => <PixelSprite sprite={SPRITE_SOUND_ON} {...props} />;
export const PixelSoundOff = (props) => <PixelSprite sprite={SPRITE_SOUND_OFF} {...props} />;
export const PixelHome = (props) => <PixelSprite sprite={SPRITE_HOME} {...props} />;
export const PixelParty = (props) => <PixelSprite sprite={SPRITE_PARTY} {...props} />;
export const PixelRefresh = (props) => <PixelSprite sprite={SPRITE_REFRESH} {...props} />;
export const PixelCool = (props) => <PixelSprite sprite={SPRITE_COOL} {...props} />;
export const PixelThink = (props) => <PixelSprite sprite={SPRITE_THINK} {...props} />;
export const PixelDizzy = (props) => <PixelSprite sprite={SPRITE_DIZZY} {...props} />;
export const PixelOops = (props) => <PixelSprite sprite={SPRITE_OOPS} {...props} />;
export const PixelWizard = (props) => <PixelSprite sprite={SPRITE_WIZARD} {...props} />;
export const PixelInfinity = (props) => <PixelSprite sprite={SPRITE_INFINITY} {...props} />;
export const PixelHourglass = (props) => <PixelSprite sprite={SPRITE_HOURGLASS} {...props} />;
