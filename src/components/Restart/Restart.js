import Grid from '../../layouts/Grid/Grid';
import Flex from '../../layouts/Flex/Flex';
import Button from "../UI/Button/Button";
import './Restart.css';

const Restart = ({onCancel, onRestart}) => {
    return (
        <section className='restart-section'>
            <Grid className='restart background-semi-dark grid--content-center grid--gap'>
                <h1 className='restart__heading font-size-500 text-silver'>Restart Game?</h1>
                <Flex className='restart__buttons flex--center flex--gap'>
                    <Button className='restart__btn btn--silver' onClick={onCancel}>
                        No, Cancel
                    </Button>
                    <Button className='restart__btn btn--yellow' onClick={onRestart}>
                        Yes, Restart
                    </Button>
                </Flex>
            </Grid>
        </section>
    );
};

export default Restart;