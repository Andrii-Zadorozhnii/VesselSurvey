import React, {useState, useEffect} from 'react';
import './InitialSection.scss';
import Input from '../../SubComponents/Input';
import Text from '../../SubComponents/text';

const DraftInput = ({className, value, onChange, storageKey}) => {
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

    return <Input className={className} value={value} onChange={handleInputChange}/>;
};

const calculateMeanDraft = (portDraft, stbdDraft) => {
    return (portDraft + stbdDraft) / 2;
};

const InitialSection = () => {
    const [InitFwdPortDraft, setInitFwdPortDraft] = useState(0.0);
    const [InitMidPortDraft, setInitMidPortDraft] = useState(0.0);
    const [InitAftPortDraft, setInitAftPortDraft] = useState(0.0);
    const [InitFwdStbdDraft, setInitFwdStbdDraft] = useState(0.0);
    const [InitMidStbdDraft, setInitMidStbdDraft] = useState(0.0);
    const [InitAftStbdDraft, setInitAftStbdDraft] = useState(0.0);
    const [InitDensity, setInitDensity] = useState(() => {
        const storedDensity = localStorage.getItem('InitDensity');
        return storedDensity ? parseFloat(storedDensity) : 0.0;
    });
    const [lbm, setLbm] = useState(() => {
        const storedLbm = localStorage.getItem('LBM');
        return storedLbm ? parseFloat(storedLbm) : 0.0;
    });
    const [distFromMarksFwd, setDistFromMarksFwd] = useState(() => {
        const storedDistFromMarksFwd = localStorage.getItem('distFromMarksFwd');
        return storedDistFromMarksFwd ? parseFloat(storedDistFromMarksFwd) : 0.0;
    });
    const [distFromMarksMid, setDistFromMarksMid] = useState(() => {
        const storedDistFromMarksMid = localStorage.getItem('distFromMarksMid');
        return storedDistFromMarksMid ? parseFloat(storedDistFromMarksMid) : 0.0;
    });
    const [distFromMarksAft, setDistFromMarksAft] = useState(() => {
        const storedDistFromMarksAft = localStorage.getItem('distFromMarksAft');
        return storedDistFromMarksAft ? parseFloat(storedDistFromMarksAft) : 0.0;
    });

    const meanInitFwdDraft = calculateMeanDraft(InitFwdPortDraft, InitFwdStbdDraft);
    const meanInitMidDraft = calculateMeanDraft(InitMidPortDraft, InitMidStbdDraft);
    const meanInitAftDraft = calculateMeanDraft(InitAftPortDraft, InitAftStbdDraft);

    const tbm = meanInitAftDraft - meanInitFwdDraft;

    useEffect(() => {
        localStorage.setItem('meanInitFwdDraft', meanInitFwdDraft.toFixed(3));
        localStorage.setItem('meanInitMidDraft', meanInitMidDraft.toFixed(3));
        localStorage.setItem('meanInitAftDraft', meanInitAftDraft.toFixed(3));
        localStorage.setItem('InitDensity', InitDensity.toFixed(3));
        localStorage.setItem('tbm', tbm.toFixed(3));
        localStorage.setItem('lbm', lbm.toFixed(3));
        localStorage.setItem('distFromMarksFwd', distFromMarksFwd.toFixed(3));
        localStorage.setItem('distFromMarksMid', distFromMarksMid.toFixed(3));
        localStorage.setItem('distFromMarksAft', distFromMarksAft.toFixed(3));
    }, [
        meanInitFwdDraft,
        meanInitMidDraft,
        meanInitAftDraft,
        InitDensity,
        tbm,
        lbm,
        distFromMarksFwd,
        distFromMarksMid,
        distFromMarksAft,
    ]);

    const handleDensityChange = (e) => {
        const newDensity = parseFloat(e.target.value);
        setInitDensity(newDensity);
        localStorage.setItem('InitDensity', newDensity.toFixed(3));
    };

    const handleLbmChange = (e) => {
        const newLbm = parseFloat(e.target.value);
        setLbm(newLbm);
        localStorage.setItem('LBM', newLbm.toFixed(3));
    };

    return (
        <div>
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
            <div className='density margin-bottom-5'>
                <p className='text-box'>DENSITY: </p>
                <input
                    className='input-Component init-density input-box text-box'
                    type='number'
                    step='0.001'
                    value={InitDensity}
                    onChange={handleDensityChange}
                />
            </div>
            <div className='trim-between-marks flex margin-bottom-5'>
                <p className='text-box'>TBM:</p>
                <p className='init-tbm text-box w85 flex-center'>{tbm.toFixed(3)}</p>
            </div>
            <div className='density margin-bottom-20'>
                <p className='text-box'>LBM: </p>
                <input
                    className='input-Component lbm input-box text-box'
                    type='number'
                    step='0.001'
                    value={lbm}
                    onChange={handleLbmChange}
                />
            </div>
            <Text value='Dist from marks to perp'/>
            <div className='data '>
                <p className='w100'>FWD</p>
                <p className='w100'>MID</p>
                <p className='w100'>AFT</p>
            </div>
            <div className='data margin-bottom-20'>
                <DraftInput
                    className='distFromMarksFwd'
                    value={distFromMarksFwd}
                    onChange={setDistFromMarksFwd}
                    storageKey='distFromMarksFwd'
                />
                <DraftInput
                    className='distFromMarksMid'
                    value={distFromMarksMid}
                    onChange={setDistFromMarksMid}
                    storageKey='distFromMarksMid'
                />
                <DraftInput
                    className='distFromMarksAft'
                    value={distFromMarksAft}
                    onChange={setDistFromMarksAft}
                    storageKey='distFromMarksAft'
                />
            </div>
            <Text value='corr to draft at marks'/>
            <div className='data'>
                <p className='w100'>FWD</p>
                <p className='w100'>MID</p>
                <p className='w100'>AFT</p>
            </div>
            <div className='data'>
                <p
                    className='corrToMarksFwd w100'
                    storageKey='corrToMarksFwd'
                >0,00</p>
                <p
                    className='corrToMarksAft w100'
                    storageKey='corrToMarksAft'
                >0,00</p>
                <p
                    className='corrToMarksAft w100'
                    storageKey='corrToMarksAft'
                >0,00</p>
            </div>
        </div>
    );
};

export default InitialSection;
