import styles from './loading.module.css';

const Loading = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loader}>
				<div className={styles.face}>
					<div className={styles.circle}></div>
				</div>
				<div className={styles.face}>
					<div className={styles.circle}></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
