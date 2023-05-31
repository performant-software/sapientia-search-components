import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import { connectRange } from 'react-instantsearch-dom'
import styles from '../../styles/Search.module.css'

interface Props {
    defaultValues: {
        min: number,
        max: number
    },
    currentRefinement: {
        min?: number,
        max?: number
    },
    refine: ({ min, max }: { min: number, max: number }) => void
}

const RangeSlider: React.FC<Props> = ({ defaultValues, currentRefinement, refine }) => {
    const [value, setValue] = useState<null | number[]>(null)
    const [valueDisplay, setValueDisplay] = useState<{ min: number, max: number }>({ min: defaultValues.min, max: defaultValues.max })

    useEffect(() => {
        if (value) {
            const [min, max] = value
            refine({ min, max })
        }
    }, [value, refine])

    useEffect(() => {
        if (!currentRefinement.min || !currentRefinement.max) {
            setValueDisplay({ min: defaultValues.min, max: defaultValues.max })
        }
    }, [currentRefinement, defaultValues.min, defaultValues.max])

    return (
        <>
            <div className={styles.sliderValues}>
                <span>{valueDisplay.min}</span>
                <span>{valueDisplay.max}</span>
            </div>
            <Range
                defaultValue={ [defaultValues.min, defaultValues.max] }
                onChange={v => setValueDisplay({ min: v[0], max: v[1] })}
                onAfterChange={v => setValue(v)}
                min={defaultValues.min}
                max={defaultValues.max}
                value={[valueDisplay.min, valueDisplay.max]}
            />
        </>
    )
}

const CustomRangeSlider = connectRange(RangeSlider)

export default CustomRangeSlider