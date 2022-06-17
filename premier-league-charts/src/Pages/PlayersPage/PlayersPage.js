import SelectPlayerController from '../../Components/Player/SelectPlayerController'

export const PlayersPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '7rem',
      }}
    >
      <SelectPlayerController />
    </div>
  )
}
