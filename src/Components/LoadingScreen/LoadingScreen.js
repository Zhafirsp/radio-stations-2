// LoadingScreen.js
import React from 'react';
import '../../Assets/Css/loading_screen.css'

const LoadingScreen = () => {
  return (
    <div class="loading-screen">
        <div class="loading-plate">
            <div class="loading-black">
                <div class="loading-border">
                    <div class="loading-white">
                        <div class="loading-center"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="loading-player">
            <div class="player-rect"></div>
            <div class="player-circ"></div>
        </div>
    </div>
  );
};

export default LoadingScreen;
