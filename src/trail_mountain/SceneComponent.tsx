// SceneComponent.tsx

import React, { useState, useEffect } from 'react';
import scenesData, { Scene, HitZone } from './SceneData';
import './SceneComponent.css';

const SceneComponent: React.FC = () => {
    const [currentScene, setCurrentScene] = useState<Scene | null>(null);
    const [currentHitZones, setCurrentHitZones] = useState<HitZone[]>([]);

    useEffect(() => {
        // Default Scene is 0
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
                    <img
                        src={currentScene.imageUrl}
                        alt={`Scene ${currentScene.id}`}
                        className="scene-image"
                        onLoad={() => {
                            const image = document.querySelector('.scene-image');
                            if (image) {
                                const width = image.clientWidth;
                                const height = image.clientHeight;

                                const updatedHitZones = currentScene.hitzones.map(zone => ({
                                    x: `${(parseFloat(zone.x) / 100) * width - 25}px`,
                                    y: `${(parseFloat(zone.y) / 100) * height - 25}px`,
                                    goto: zone.goto,
                                }));

                                setCurrentHitZones(updatedHitZones);
                            }
                        }}
                    />
                    {currentHitZones.map((zone: HitZone, index: number) => (
                        <button
                            key={index}
                            className="hit-zone"
                            style={{ position: 'absolute', left: zone.x, top: zone.y }}
                            onClick={() => handleZoneClick(zone.goto)}
                        ></button>
                    ))}
                </>
            )}
        </div>
    );
};

export default SceneComponent;
