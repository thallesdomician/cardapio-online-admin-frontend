import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';
import { toast } from 'react-toastify';

import {
  Container,
  ContentTitle,
  Content,
  IconAdd,
  IconRemove,
  BlockTime,
} from './styles';
import { IoMdRemoveCircle, IoMdAddCircle } from 'react-icons/io';

import api from '~/services/api';

import Loading from '~/components/Loader';

import { AiOutlineReload } from 'react-icons/ai';

import { Formik, Field, Form, FieldArray } from 'formik';
import * as Yup from 'yup';

import Title from '~/components/Title';
import { SelectField } from './SelectField';

const schema = Yup.object().shape({
  days: Yup.array().of(
    Yup.object().shape({
      day_of_week: Yup.string().required('Dia da semana obrigatório'),
      times: Yup.array().of(
        Yup.object().shape({
          start: Yup.string().required('Hora de abertura obrigatório'),
          end: Yup.string().required('Hora de abertura obrigatório'),
        })
      ),
    })
  ),
});

const options = [
  { value: 'Mon', label: 'Segunda-Feira' },
  { value: 'Tue', label: 'Terça-feira' },
  { value: 'Wed', label: 'Quarta-Feira' },
  { value: 'Thu', label: 'Quinta-Feira' },
  { value: 'Fri', label: 'Sexta-feira' },
  { value: 'Sat', label: 'Sábado' },
  { value: 'Sun', label: 'Domingo' },
];

function StoreEditOpenDays() {
  const { slug } = useParams();

  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api
      .get(`/v1/store/${slug}/`)
      .then(res => {
        const { data } = res;
        setStore(data);
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar loja: ${slug}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleSubmit({ days }) {
    api
      .put(`/v1/store/${slug}/open-days/`, { days: days })
      .then(({ data }) => {
        setStore(data);
        toast.success('Dados salvos com sucesso!');
      })
      .catch(error => {
        toast.error('Ocorreu um erro ao salvar os dados.');
      })
      .finally(() => {
        setSaving(false);
      });
  }
  if (loading) {
    return <Loading />;
  }

  const { days } = store;
  return (
    <Container>
      <Formik
        initialValues={store}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, errors, touched, handleReset }) => {
          return (
            <Form className="form">
              <FieldArray
                name="days"
                render={arrayDayHelpers => {
                  return (
                    <>
                      <ContentTitle>
                        <Title>Dias de Funcionamento</Title>
                        <IconAdd
                          className="icon-add"
                          onClick={() =>
                            arrayDayHelpers.push({
                              day_of_week: '',
                              times: [{ start: '', end: '' }],
                            })
                          }
                        >
                          <IoMdAddCircle />
                        </IconAdd>
                      </ContentTitle>
                      <Content>
                        {values.days && values.days.length > 0
                          ? values.days.map((day, day_index) => {
                              return (
                                <div key={day_index}>
                                  <label>
                                    Dia da semana
                                    <Field
                                      name={`days.${day_index}.day_of_week`}
                                      component={SelectField}
                                      options={options}
                                    />
                                  </label>
                                  <div
                                    onClick={() => {
                                      arrayDayHelpers.remove(day_index);
                                    }}
                                  >
                                    {`rm day ${day_index}`}
                                  </div>
                                  <FieldArray
                                    name={`${arrayDayHelpers.name}.${day_index}.times`}
                                    render={arrayTimeHelpers => {
                                      console.log(
                                        `'${arrayDayHelpers.name}': name day time`
                                      );
                                      return (
                                        <>
                                          <IconAdd
                                            className="icon-add"
                                            onClick={() => {
                                              arrayTimeHelpers.push({
                                                start: '',
                                                end: '',
                                              });
                                            }}
                                          >
                                            <IoMdAddCircle />
                                          </IconAdd>

                                          {day.times.map((time, time_index) => {
                                            return (
                                              <div key={time_index}>
                                                <BlockTime>
                                                  <label>
                                                    Abertura
                                                    <Field
                                                      name={`days.${day_index}.times.${time_index}.start`}
                                                      type="time"
                                                    />
                                                  </label>
                                                  <label>
                                                    Fechamento
                                                    <Field
                                                      name={`days.${day_index}.times.${time_index}.end`}
                                                      type="time"
                                                    />
                                                  </label>

                                                  {day.times.length > 1 ? (
                                                    <IconRemove
                                                      onClick={() => {
                                                        arrayTimeHelpers.remove(
                                                          time_index
                                                        );
                                                      }}
                                                    >
                                                      <IoMdRemoveCircle />
                                                    </IconRemove>
                                                  ) : null}
                                                </BlockTime>
                                              </div>
                                            );
                                          })}
                                        </>
                                      );
                                    }}
                                  />
                                </div>
                              );
                            })
                          : null}
                      </Content>
                    </>
                  );
                }}
              />
              <button disabled={saving ? 'disabled' : ''} type="submit">
                {saving ? (
                  <>
                    Salvando <AiOutlineReload />
                  </>
                ) : (
                  'Salvar'
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default StoreEditOpenDays;
