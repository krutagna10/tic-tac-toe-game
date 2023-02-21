import Grid from '../../layouts/Grid/Grid';
import Flex from '../../layouts/Flex/Flex';
import './Restart.css';

const Restart = (props) => {
    return (
        <section className='restart-section'>
            <Grid className='restart background-semi-dark grid--content-center grid--gap'>
                <h1 className='restart__heading font-size-500 text-silver'>Restart Game?</h1>
                <div className='restart__buttons flex flex--justify-center flex--align-center flex--gap'>
                    <button className='restart__btn btn btn--silver' onClick={props.onCancel}>
                        No, Cancel
                    </button>
                    <button className='restart__btn btn btn--yellow' onClick={props.onRestart}>
                        Yes, Restart
                    </button>
                </div>
            </Grid>
        </section>
    );
};

export default Restart;