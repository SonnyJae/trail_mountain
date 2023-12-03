
import React, { useState, useEffect } from 'react';
import scenesData, { Scene, HitZone } from './SceneData';

const SceneComponent: React.FC = () => {
    const [currentScene, setCurrentScene] = useState<Scene | null>(null);

    useEffect(() => {
        //Default Scene is 0
        const initialScene = scenesData.scenes.find(scene => scene.id === 0);
        if (initialScene) {
            setCurrentScene(initialScene);
        }
    }, []);

    const handleZoneClick = (goto: number) => {
        const nextScene = scenesData.scenes.find(scene => scene.id === goto);
        if (nextScene) {
            setCurrentScene(nextScene);
        }
    };

    return (
        <div className="scene-container" style={{ position: 'relative' }}>
            {currentScene && (
                <>
                    <img src={currentScene.imageUrl} alt={`Scene ${currentScene.id}`} className="scene-image" />
                    {currentScene.hitzones.map((zone: HitZone, index: number) => (
                        <button
                            key={index}
                            className="hit-zone"
                            style={{ position: 'absolute', left: zone.x, top: zone.y, width: '50px', height: '50px' }}
                            onClick={() => handleZoneClick(zone.goto)}
                        >

                        </button>
                    ))}
                </>
            )}
        </div>
    );
};

export default SceneComponent;
