import React, { useState, useEffect } from 'react';
import './FinalSection.scss';
import Input from '../../SubComponents/Input';

const DraftInput = ({ className, value, onChange, storageKey }) => {
    useEffect(() => {
        const storedValue = localStorage.getItem(storageKey);
        if (storedValue) {
            onChange(parseFloat(storedValue));
        }
    }, [storageKey, onChange]);

    const handleInputChange = (e) => {
        const newValue = parseFloat(e.target.value);
        onChange(newValue);
        localStorage.setItem(storageKey, newValue.toFixed(2));
    };

    return <Input className={className} value={value} onChange={handleInputChange} />;
};

const calculateMeanDraft = (portDraft, stbdDraft) => {
    return ((portDraft + stbdDraft)/2);
};

const FinalSection = () => {
    const [FinalFwdPortDraft, setFinalFwdPortDraft] = useState(0.0);
    const [FinalMidPortDraft, setFinalMidPortDraft] = useState(0.0);
    const [FinalAftPortDraft, setFinalAftPortDraft] = useState(0.0);
    const [FinalFwdStbdDraft, setFinalFwdStbdDraft] = useState(0.0);
    const [FinalMidStbdDraft, setFinalMidStbdDraft] = useState(0.0);
    const [FinalAftStbdDraft, setFinalAftStbdDraft] = useState(0.0);

    const meanFinalFwdDraft = calculateMeanDraft(FinalFwdPortDraft, FinalFwdStbdDraft);
    const meanFinalMidDraft = calculateMeanDraft(FinalMidPortDraft, FinalMidStbdDraft);
    const meanFinalAftDraft = calculateMeanDraft(FinalAftPortDraft, FinalAftStbdDraft);

    useEffect(() => {
        localStorage.setItem('meanFinalFwdDraft', meanFinalFwdDraft.toFixed(2));
        localStorage.setItem('meanFinalMidDraft', meanFinalMidDraft.toFixed(2));
        localStorage.setItem('meanFinalAftDraft', meanFinalAftDraft.toFixed(2));
        console.log('meanFinalFwdDraft:', meanFinalFwdDraft.toFixed(2));
        console.log('meanFinalMidDraft:', meanFinalMidDraft.toFixed(2));
        console.log('meanFinalAftDraft:', meanFinalAftDraft.toFixed(2));
    }, [meanFinalFwdDraft, meanFinalMidDraft, meanFinalAftDraft]);

    return (
        <div className='initial-section'>
            <div className='data'>
                <DraftInput
                    className='FinalFwdPortDraft'
                    value={FinalFwdPortDraft}
                    onChange={setFinalFwdPortDraft}
                    storageKey='finalFwdPortDraft'
                />
                <DraftInput
                    className='FinalMidPortDraft'
                    value={FinalMidPortDraft}
                    onChange={setFinalMidPortDraft}
                    storageKey='finalMidPortDraft'
                />
                <DraftInput
                    className='FinalAftPortDraft'
                    value={FinalAftPortDraft}
                    onChange={setFinalAftPortDraft}
                    storageKey='finalAftPortDraft'
                />
            </div>
            <div className='data'>
                <p>FWD</p>
                <p>MID</p>
                <p>AFT</p>
            </div>
            <div className='data'>
                <DraftInput
                    className='FinalFwdStbdDraft'
                    value={FinalFwdStbdDraft}
                    onChange={setFinalFwdStbdDraft}
                    storageKey='finalFwdStbdDraft'
                />
                <DraftInput
                    className='FinalMidStbdDraft'
                    value={FinalMidStbdDraft}
                    onChange={setFinalMidStbdDraft}
                    storageKey='finalMidStbdDraft'
                />
                <DraftInput
                    className='FinalAftStbdDraft'
                    value={FinalAftStbdDraft}
                    onChange={setFinalAftStbdDraft}
                    storageKey='finalAftStbdDraft'
                />
            </div>
        </div>
    );
};

export default FinalSection;
