import React, { useState, useEffect } from 'react';
import './InitialSection.scss';
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

    return (
        <Input className={className} value={value} onChange={handleInputChange} />
    );
};

const InitialSection = () => {
    const [InitFwdPortDraft, setInitFwdPortDraft] = useState(0.0);
    const [InitMidPortDraft, setInitMidPortDraft] = useState(0.0);
    const [InitAftPortDraft, setInitAftPortDraft] = useState(0.0);
    const [InitFwdStbdDraft, setInitFwdStbdDraft] = useState(0.0);
    const [InitMidStbdDraft, setInitMidStbdDraft] = useState(0.0);
    const [InitAftStbdDraft, setInitAftStbdDraft] = useState(0.0);

    return (
        <div className='initial-section'>
            <div className='data'>
                <DraftInput
                    className='InitFwdPortDraft'
                    value={InitFwdPortDraft}
                    onChange={setInitFwdPortDraft}
                    storageKey='initFwdPortDraft'
                />
                <DraftInput
                    className='InitMidPortDraft'
                    value={InitMidPortDraft}
                    onChange={setInitMidPortDraft}
                    storageKey='initMidPortDraft'
                />
                <DraftInput
                    className='InitAftPortDraft'
                    value={InitAftPortDraft}
                    onChange={setInitAftPortDraft}
                    storageKey='initAftPortDraft'
                />
            </div>
            <div className='data'>
                <p>FWD</p>
                <p>MID</p>
                <p>AFT</p>
            </div>
            <div className='data'>
                <DraftInput
                    className='InitFwdStbdDraft'
                    value={InitFwdStbdDraft}
                    onChange={setInitFwdStbdDraft}
                    storageKey='initFwdStbdDraft'
                />
                <DraftInput
                    className='InitMidStbdDraft'
                    value={InitMidStbdDraft}
                    onChange={setInitMidStbdDraft}
                    storageKey='initMidStbdDraft'
                />
                <DraftInput
                    className='InitAftStbdDraft'
                    value={InitAftStbdDraft}
                    onChange={setInitAftStbdDraft}
                    storageKey='initAftStbdDraft'
                />
            </div>
        </div>
    );
};

export default InitialSection;
