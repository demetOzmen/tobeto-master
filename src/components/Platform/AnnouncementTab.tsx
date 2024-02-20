import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Announcement } from '../../models/responses/announcement/getAllAnnouncementResponse'
import announcementService from '../../services/announcementService'
import { ShowMoreAnc } from './ShowMoreAnc'

type Props = {}

export const AnnouncementTab = (props: Props) => {
  
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const fetchAnnouncements = async () => {
      const response = await announcementService.getAll();
      setAnnouncements(response.data.items.slice(0, 3)); // Sadece ilk 3 duyuruyu al
  };

  
  useEffect(() => {
    fetchAnnouncements();
  }, []);


  return (
    <>
    <Row>
      <Col>
        <Row className="anc-row">
          {announcements.map((announcement, index) => (
            <Col key={index} className="anc-card">
              <Row>
                <Col>
                  <div className="anc-title">
                    Duyuru
                    <span className="anc-ik">
                      İstanbul Kodluyor
                    </span>
                  </div>
                  <br />
                  <span className="anc-card-check">
                    {announcement.announcementName}
                    <br />
                    <br />
                    <br />
                  </span>
                  <Row className="anc-date-row">
                    <Col className="anc-date">
                      <FontAwesomeIcon icon={faCalendar} /> {announcement.sendDate}{" "}
                    </Col>
                    <Col className="anc-link ">
                      <Link
                        to={`/announcement/${announcement.id}`}
                        className="anc-link "
                      >
                        Devamını Oku
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          ))}
          <ShowMoreAnc/>
        </Row>
      </Col>
    </Row>
    </>
  )
}
