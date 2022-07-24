import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../../views/confirm-details/slider.css';

export default function SliderLevel() {
  const [level, setLevel] = useState<number>(10);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-17xl font-medium">Level</span>
      <div className="flex gap-4">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="horizontal-slider-thumb"
          trackClassName="horizontal-slider-track"
          onChange={(value) => setLevel(value)}
          value={level}
        />
        <div className="w-[80px] leading-[22px] text-right">
          {level <= 15 ? (
            <span className="text-red-800 font-medium text-14xl">1</span>
          ) : level <= 30 ? (
            <span className="text-red-800 font-medium text-14xl">2</span>
          ) : level <= 50 ? (
            <span className="text-primary-700 font-medium text-14xl">3</span>
          ) : level <= 75 ? (
            <span className="text-green-700 font-medium text-14xl">4</span>
          ) : (
            <span className="text-green-700 font-medium text-14xl">5</span>
          )}
        </div>
      </div>
    </div>
  );
}
