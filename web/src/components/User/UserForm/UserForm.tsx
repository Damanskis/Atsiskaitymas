import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="username"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Username
        </Label>

        <TextField
          name="username"
          defaultValue={props.user?.username}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="username" className="rw-field-error" />

        <Label
          name="hashedPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hashed password
        </Label>

        <TextField
          name="hashedPassword"
          defaultValue={props.user?.hashedPassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>

        <TextField
          name="salt"
          defaultValue={props.user?.salt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>

        <TextField
          name="role"
          defaultValue={props.user?.role}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>

        <TextField
          name="resetToken"
          defaultValue={props.user?.resetToken}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>

        <DatetimeLocalField
          name="resetTokenExpiresAt"
          defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
