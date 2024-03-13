import React from 'react';
import PropTypes from 'prop-types';
import {Col, ContentHeader, HeadingSection, Row, Section, Table} from '../';
import {JRender} from '@jahia/js-server-engine';
import todoI18n from '../../temp/locales/fr';

export const RealtorMainView = ({
    name,
    description,
    image,
    data,
    address,
    phone,
    email,
    estates
}) => {
    return (
        <>
            <Section>
                <ContentHeader
                    title={name}
                    image={image}
                    description={description}
                />
            </Section>
            <Section>
                <Table rows={data}/>
            </Section>
            <Section>
                <HeadingSection title={todoI18n.section.heading.contact}/>
                <Row>
                    <Col>
                        <address>
                            <div className="d-flex flex-column mb-4">
                                <strong>{todoI18n.section.contact.address}</strong>
                                <span>{address}</span>
                            </div>
                            <div className="d-flex flex-column mb-4">
                                <strong>{todoI18n.section.contact.phone}</strong>
                                <a href={`tel:${phone}`}>
                                    {phone}
                                </a>
                            </div>
                            <div className="d-flex flex-column mb-4">
                                <strong>{todoI18n.section.contact.email}</strong>
                                <a href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </div>
                        </address>
                        <button type="button"
                                className="btn btn-primary btn-lg w-100"
                                data-bs-toggle="modal"
                                data-bs-target="#modalContact"
                        >
                            {todoI18n.section.contact.btn}
                        </button>
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-center align-items-center bg-secondary flex-fill h-100">
                            map here
                        </div>
                    </Col>
                </Row>
            </Section>
            <Section>
                <HeadingSection title={todoI18n.section.heading.exclusiveEstates}/>
                <Row className="row-cols-3 g-0">
                    {estates.map(estate => (
                        <Col key={estate.getIdentifier()} className="g-0">
                            <JRender node={estate}/>
                        </Col>
                    ))}
                </Row>
            </Section>
        </>
    );
};

RealtorMainView.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired,
    data: PropTypes.array.isRequired,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    estates: PropTypes.array
};
